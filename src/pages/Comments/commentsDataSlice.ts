import { createSlice } from '@reduxjs/toolkit'

interface CommentState {
  comments: Array<Object>
}

const initialState: CommentState = {
  comments: [],
}

export const commentsDataSlice = createSlice({
  name: 'commentsData',
  initialState,
  reducers: {
    setComments: (state, actions) => {
      console.log('reducer ', actions.payload)
      state.comments = actions.payload
    },
  },
})

export const { setComments } = commentsDataSlice.actions

export default commentsDataSlice.reducer
