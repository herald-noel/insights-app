import Mainlayout from '../../layout/Mainlayout'
import { Box, Button } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw } from 'draft-js'
import SendIcon from '@mui/icons-material/Send'
import draftToMarkdown from 'draftjs-to-markdown'
import { TextField } from '@mui/material'
import SnackbarBlog from './components/SnackbarBlog'
import { useDispatch } from 'react-redux'
import { openSnackbar } from './createPostSlice'

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorContent, setEditorContent] = useState(null)
  const dispatch = useDispatch()

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
    setEditorContent(editorState.getCurrentContent().getPlainText().trim())
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const content = editorState.getCurrentContent()
    if (!editorContent) {
      dispatch(openSnackbar())
      return
    }
    console.log(draftToMarkdown(convertToRaw(content)))
  }

  return (
    <Mainlayout>
      <Box component="form" onSubmit={handleSubmit}>
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
        />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
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
      </Box>
    </Mainlayout>
  )
}

export default CreateBlog
