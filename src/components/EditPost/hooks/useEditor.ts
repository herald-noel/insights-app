import { useState } from 'react'
import { EditorState } from 'draft-js'

const useEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorContent, setEditorContent] = useState<string | null>(null)

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
    setEditorContent(editorState.getCurrentContent().getPlainText().trim())
  }

  return {
    editorState,
    setEditorState,
    onEditorStateChange,
    editorContent,
    setEditorContent,
  }
}

export default useEditor
