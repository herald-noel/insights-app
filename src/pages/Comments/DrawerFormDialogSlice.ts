import { createSlice } from '@reduxjs/toolkit'

interface OpenState {
  isOpen: boolean
}

const initialState: OpenState = {
  isOpen: false,
}

export const DrawerFormDialogSlice = createSlice({
  name: 'DrawerFormDialog',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openDrawer } = DrawerFormDialogSlice.actions

export default DrawerFormDialogSlice.reducer
