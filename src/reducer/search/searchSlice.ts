import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: 'asd',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchKey(state, action) {
      state.query = action.payload
    },
  },
})

export const { searchKey } = searchSlice.actions
export default searchSlice.reducer
