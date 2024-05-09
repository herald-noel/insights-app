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
import draftToMarkdown from 'draftjs-to-markdown'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { REQUEST } from '../../data/requests.constants'
import '../../styles/editor.modules.css'
import useCurrentId from '../../hooks/useCurrentId'
import { markdownToDraft } from 'markdown-draft-js'

const EditPost = (props) => {
  const { isNew } = props

  const { currentId } = useCurrentId()
  const { editorState, onEditorStateChange, editorContent, setEditorState } =
    useEditor()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [responseData, setResponseData] = useState({})

  const { fetchData: createFetchData } = useFetch(
    '/posts/create/blog',
    REQUEST.POST
  )
  const { data, fetchData: getFetchData } = useFetch(
    `posts/get/blog/${currentId}`,
    REQUEST.GET
  )

  useEffect(() => {
    if (!isNew) {
      getFetchData()
    }
  }, [])

  useEffect(() => {
    if (data !== null) {
      setResponseData(data)
    }
  }, [data])

  const handleSubmit = async (event) => {
    event.preventDefault()

    let content = editorState.getCurrentContent()
    if (!editorContent) {
      dispatch(openSnackbar())
      return
    }
    content = draftToMarkdown(convertToRaw(content))
    const newData = {
      title: title,
      content: content,
    }

    createFetchData(newData)
    navigate('/home')
  }

  useEffect(() => {
    if (data !== null && !isNew) {
      setTitle(data.title)
      const contentState = EditorState.createWithContent(
        convertFromRaw(markdownToDraft(data.content))
      )
      setEditorState(contentState)
    }
  }, [data, isNew, setEditorState])

  return (
    <Mainlayout>
      <form onSubmit={handleSubmit}>
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
          value={responseData.title || title}
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