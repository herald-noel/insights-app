import Mainlayout from '../../layout/Mainlayout'
import { Box, Button } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SendIcon from '@mui/icons-material/Send'
import { TextField } from '@mui/material'
import SnackbarBlog from './components/SnackbarBlog'
import useEditor from './hooks/useEditor'

const CreateBlog = () => {
  const { editorState, handleSubmit, onEditorStateChange } = useEditor()
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
