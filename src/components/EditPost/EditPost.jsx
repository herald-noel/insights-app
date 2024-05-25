import PropTypes from 'prop-types'
import Mainlayout from '../../layout/Mainlayout'
import { Box, TextField } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SendIcon from '@mui/icons-material/Send'
import useEditor from './hooks/useEditor'
import { useEffect, useState } from 'react'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import '../../styles/editor.modules.css'
import useCurrentId from '../../hooks/useCurrentId'
import { markdownToDraft, draftToMarkdown } from 'markdown-draft-js'
import useSearch from '../../hooks/useSearch'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../data/paths'
import LoadingButton from '@mui/lab/LoadingButton'
import { insertImage, resizeImage } from './components/ImageHelper'
import UploadImage from './components/UploadImage'
import SnackBarAlert from './components/SnackBarAlert'

const EditPost = (props) => {
  const { isNew } = props

  const { currentId } = useCurrentId()
  const {
    editorState,
    onEditorStateChange,
    editorContent,
    setEditorContent,
    setEditorState,
  } = useEditor()

  const navigate = useNavigate()
  const { setSearch } = useSearch()
  const [errorThumbnail, setErrorThumbnail] = useState(false)
  const [errorEditor, setErrorEditor] = useState(false)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)

  const { loading: createLoading, fetchData: createFetchData } = useFetch(
    '/posts/create/blog',
    REQUEST.POST
  )
  const { data, fetchData: getFetchData } = useFetch(
    `posts/get/blog/${currentId}`,
    REQUEST.GET
  )
  const { loading: updateLoading, fetchData: updateData } = useFetch(
    `/posts/update/blog/${currentId}`,
    REQUEST.PUT
  )

  useEffect(() => {
    if (!isNew) {
      getFetchData()
    }
  }, [])

  useEffect(() => {
    if (data !== null && !isNew) {
      console.log(data)
      // console.log(data.images[0].imageURL)
      setTitle(data.title)

      setImageUrl(data.images[0]?.imageURL || null)
      const contentState = EditorState.createWithContent(
        convertFromRaw(markdownToDraft(data.content))
      )
      setEditorContent(data.content)
      let newEditorState = contentState
      if (data.images[0]?.imageURL) {
        newEditorState = insertImage(newEditorState, data.images[0].imageURL)
      }
      setEditorState(newEditorState)
    }
  }, [data, isNew, setEditorState, setEditorContent])

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    console.log(file)
    const resizedImage = await resizeImage(file, 800, 800)
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        setImage(resizedImage) // Set image state for form submission
        resolve({ data: { url: reader.result } })
      }
      reader.onerror = (reason) => reject(reason)
      reader.readAsDataURL(resizedImage)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let content = editorState.getCurrentContent()
    if (!editorContent) {
      setErrorEditor(true)
      return
    }
    content = draftToMarkdown(convertToRaw(content))

    const blogRequestDTO = {
      title: title,
      content: content,
    }

    const formData = new FormData()
    formData.append(
      'blog',
      new Blob([JSON.stringify(blogRequestDTO)], { type: 'application/json' })
    )
    if (image) {
      const resizedImage = await resizeImage(image, 800, 800)
      formData.append('image', resizedImage, image.name)
    }

    if (isNew) {
      if (!image) {
        setErrorThumbnail(true)
        return
      }
      await createFetchData(formData)
      console.log('Image Created', image)
    } else {
      await updateData(formData)
      console.log('ImageUpdated', image)
    }
    setSearch('')
    navigate(PATH.HOME, { state: { refresh: true } })
  }

  const handleCloseThumbnailError = () => {
    setErrorThumbnail(false)
  }

  const handleCloseEditorError = () => {
    setErrorEditor(false)
  }

  return (
    <Mainlayout>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            loading={createLoading || updateLoading}
            loadingPosition="end"
            variant="outlined"
            sx={{
              marginBottom: '8px',
            }}
            type="submit"
            endIcon={<SendIcon />}
          >
            {isNew ? 'POST' : 'SAVE'}
          </LoadingButton>
        </Box>
        <UploadImage handleImageUpload={handleImageUpload} isNew={isNew} />
        <TextField
          required
          id="outlined-required"
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
          stripPastedStyles={true}
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'link',
              'emoji',
              'history',
            ],
            link: { inDropdown: true },
          }}
          placeholder="Tell your story..."
        />
        <SnackBarAlert
          error={errorThumbnail}
          message={'No thumbnail selected'}
          handleCloseError={handleCloseThumbnailError}
        />
        <SnackBarAlert
          error={errorEditor}
          message={'Editor content is required'}
          handleCloseError={handleCloseEditorError}
        />
      </form>
    </Mainlayout>
  )
}

EditPost.propTypes = {
  isNew: PropTypes.bool.isRequired,
}

export default EditPost
