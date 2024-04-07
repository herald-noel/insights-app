
import { createSlice } from "@reduxjs/toolkit"

interface OpenState {
  isOpen: Boolean;
}

const initialState: OpenState = {
  isOpen: false,
}

export const signUpFormDialogSlice = createSlice({
  name: 'signUpFormDialog',
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.isOpen = !state.isOpen
    },
  }
})

export const {openSignUp} = signUpFormDialogSlice.actions

export default signUpFormDialogSlice.reducer
