import { createSlice } from "@reduxjs/toolkit"

interface OpenState {
  isOpen: Boolean;
}

const initialState: OpenState = {
  isOpen: false,
}

export const loginFormDialogSlice = createSlice({
  name: 'loginFormDialog',
  initialState,
  reducers: {
    clickOpen: (state) => {
      state.isOpen = !state.isOpen
    },
  }
})

export const {clickOpen} = loginFormDialogSlice.actions

export default loginFormDialogSlice.reducer

