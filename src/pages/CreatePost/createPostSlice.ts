import { createSlice } from '@reduxjs/toolkit'

interface OpenState {
  isOpen: Boolean
}

const initialState: OpenState = {
  isOpen: false,
}

export const createPostSlice = createSlice({
  name: 'createPostSlice ',
  initialState,
  reducers: {
    openSnackbar: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openSnackbar } = createPostSlice.actions

export default createPostSlice.reducer
