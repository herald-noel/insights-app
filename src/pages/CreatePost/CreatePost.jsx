import Mainlayout from '../../layout/Mainlayout'
import { Box, Button } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { convertToRaw } from 'draft-js'
import SendIcon from '@mui/icons-material/Send'

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
  }

  return (
    <Mainlayout>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={() => {
              const content = draftToHtml(
                convertToRaw(editorState.getCurrentContent())
              )
              console.log(content)
            }}
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
