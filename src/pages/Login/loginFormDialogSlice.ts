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
  reducers: {}
})

export default loginFormDialogSlice.reducer

