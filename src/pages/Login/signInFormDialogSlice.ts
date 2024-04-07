import { createSlice } from "@reduxjs/toolkit"

interface OpenState {
  isOpen: Boolean;
}

const initialState: OpenState = {
  isOpen: false,
}

export const signInFormDialogSlice = createSlice({
  name: 'signInFormDialog',
  initialState,
  reducers: {
    clickOpen: (state) => {
      state.isOpen = !state.isOpen
    },
  }
})

export const {clickOpen} = signInFormDialogSlice.actions

export default signInFormDialogSlice.reducer

