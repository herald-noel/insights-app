import Mainlayout from '../../layout/Mainlayout'
import { Box, Button } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw } from 'draft-js'
import SendIcon from '@mui/icons-material/Send'
import draftToMarkdown from 'draftjs-to-markdown'

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
  }

  const handleSubmit = () => {
    const content = editorState.getCurrentContent()
    console.log(draftToMarkdown(convertToRaw(content)))
  }

  return (
    <Mainlayout>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{
              marginBottom: '8px',
            }}
            endIcon={<SendIcon />}
          >
            POST
          </Button>
        </Box>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Enter text here..."
        />
      </Box>
    </Mainlayout>
  )
}

export default CreateBlog
