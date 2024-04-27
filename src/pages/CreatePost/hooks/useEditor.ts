import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { EditorState } from 'draft-js'
import { openSnackbar } from '../createPostSlice'
import draftToMarkdown from 'draftjs-to-markdown'
import { convertToRaw } from 'draft-js'

const useEditor = () => {
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
  return {
    editorState,
    handleSubmit,
    onEditorStateChange,
  }
}

export default useEditor
