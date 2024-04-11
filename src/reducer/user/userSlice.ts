import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true
      state.user = action.payload
      console.log('User logged in:', action.payload) // Add logging for debugging
      console.log('Authentication: ', state.isAuthenticated)
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { loginSuccess, logout } = userSlice.actions
export default userSlice.reducer
