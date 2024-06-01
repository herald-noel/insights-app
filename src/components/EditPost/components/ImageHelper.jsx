// imageHelper.jsx
import { EditorState, AtomicBlockUtils, ContentBlock } from 'draft-js'

// Function to resize image
export const resizeImage = (file, maxWidth, maxHeight) => {
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

// Function to insert image entity into the editor state
export const insertImage = (editorState, url) => {
  const contentState = editorState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity(
    'IMAGE',
    'IMMUTABLE',
    { src: url }
  )
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  )
  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  )
}

// Function to remove images from the editor state by URL
export const removeImages = (editorState, imageUrl) => {
  const contentState = editorState.getCurrentContent()
  const blockMap = contentState.getBlockMap()

  const newBlockMap = blockMap.map((block) => {
    const entityKey = block.getEntityAt(0)
    if (entityKey) {
      const entity = contentState.getEntity(entityKey)
      if (entity.getType() === 'IMAGE' && entity.getData().src === imageUrl) {
        const newBlock = new ContentBlock({
          key: block.getKey(),
          type: 'unstyled',
          text: '',
          characterList: block.getCharacterList().splice(0, 0),
          depth: block.getDepth(),
          data: block.getData(),
        })
        return newBlock
      }
    }
    return block
  })

  const newContentState = contentState.set('blockMap', newBlockMap)
  return EditorState.push(editorState, newContentState, 'remove-range')
}
