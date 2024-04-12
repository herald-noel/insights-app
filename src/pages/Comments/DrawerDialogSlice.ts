import { createSlice } from '@reduxjs/toolkit'

interface OpenState {
  isOpen: boolean
}

const initialState: OpenState = {
  isOpen: false,
}

export const DrawerDialogSlice = createSlice({
  name: 'DrawerDialog',
  initialState,
  reducers: {
    openDrawer: (state) => {
      // Toggle the isOpen state to the opposite of its current value
      state.isOpen = !state.isOpen
    },
  },
})

export const { openDrawer } = DrawerDialogSlice.actions
export default DrawerDialogSlice.reducer
