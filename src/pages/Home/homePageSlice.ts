import { createSlice } from '@reduxjs/toolkit'

interface PageState {
  page: Number
}

const initialState: PageState = {
  page: 0,
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    clickPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { clickPage } = homePageSlice.actions

export default homePageSlice.reducer
