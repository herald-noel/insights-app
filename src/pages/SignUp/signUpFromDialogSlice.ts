
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
    clickOpen: (state) => {
      state.isOpen = !state.isOpen
      console.log("register " + state.isOpen)
    },
  }
})

export const {clickOpen} = signUpFormDialogSlice.actions

export default signUpFormDialogSlice.reducer
