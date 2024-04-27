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
import { convertToRaw } from 'draft-js'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import '../../styles/editor.modules.css'

const CreateBlog = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const { data, fetchData } = useFetch('/posts/create/blog', REQUEST.POST)

  const { editorState, onEditorStateChange, editorContent } = useEditor()

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
    fetchData(newData)
    console.log(content)
  }

  useEffect(() => {
    console.log(data)
  }, [data])

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
            POST
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
          }}
          placeholder="Tell your story..."
        />
        <SnackbarBlog />
      </form>
    </Mainlayout>
  )
}

export default CreateBlog
