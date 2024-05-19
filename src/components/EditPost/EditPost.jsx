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
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import '../../styles/editor.modules.css'
import useCurrentId from '../../hooks/useCurrentId'
import { markdownToDraft, draftToMarkdown } from 'markdown-draft-js'
import useSearch from '../../hooks/useSearch'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../data/paths'

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

  const { fetchData: createFetchData } = useFetch(
    '/posts/create/blog',
    REQUEST.POST
  )
  const { data, fetchData: getFetchData } = useFetch(
    `posts/get/blog/${currentId}`,
    REQUEST.GET
  )
  const { fetchData: updateData } = useFetch(
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
      setImageUrl(data.imageUrl)

      const contentState = EditorState.createWithContent(
        convertFromRaw(markdownToDraft(data.content))
      )
      setEditorContent(data.content)
      setEditorState(contentState)
    }
  }, [data, isNew, setEditorState, setEditorContent])

  const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          let width = img.width
          let height = img.height
          if (width > maxWidth) {
            height = (maxWidth / width) * height
            width = maxWidth
          }
          if (height > maxHeight) {
            width = (maxHeight / height) * width
            height = maxHeight
          }
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          canvas.toBlob(resolve, file.type)
        }
        img.onerror = (error) => reject(error)
        img.src = event.target.result
      }
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleImageUpload = async (file) => {
    try {
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
    } catch (error) {
      throw error
    }
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
      createFetchData(formData)
    } else {
      updateData(formData)
    }
    setSearch('')
    navigate(PATH.HOME, { state: { refresh: true } })
  }

  return (
    <Mainlayout>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{
              marginBottom: '8px',
            }}
            type="submit"
            endIcon={<SendIcon />}
          >
            {isNew ? 'POST' : 'SAVE'}
          </Button>
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
              alt: { present: true, mandatory: true },
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
