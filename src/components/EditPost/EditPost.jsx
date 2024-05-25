import PropTypes from 'prop-types'
import Mainlayout from '../../layout/Mainlayout'
import { Box, Button } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SendIcon from '@mui/icons-material/Send'
import { TextField } from '@mui/material'
import SnackbarBlog from './components/SnackbarBlog'
import useEditor from './hooks/useEditor'
import { useEffect, useState } from 'react'
import { openSnackbar } from './createPostSlice'
import {
  convertFromRaw,
  convertToRaw,
  EditorState,
  AtomicBlockUtils,
} from 'draft-js'
import { useDispatch } from 'react-redux'
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

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setSearch } = useSearch()

  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

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

  const handleImageUpload = async (file) => {
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
      dispatch(openSnackbar())
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
      const resizedImage = await resizeImage(image, 800, 800) // Resize image to fit within 800x800 pixels

      formData.append('image', resizedImage, image.name)
    }
    if (isNew) {
      await createFetchData(formData)
    } else {
      await updateData(formData)
    }
    setSearch('')
    navigate(PATH.HOME, { state: { refresh: true } })
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
              'image',
              'emoji',
              'history',
            ],
            link: { inDropdown: true },
            image: {
              previewImage: true,
              uploadCallback: handleImageUpload,
            },
          }}
          placeholder="Tell your story..."
        />
        <SnackbarBlog />
      </form>
    </Mainlayout>
  )
}

EditPost.propTypes = {
  isNew: PropTypes.bool.isRequired,
}

export default EditPost
