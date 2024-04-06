import { combineReducers } from "@reduxjs/toolkit"
import { loginFormDialogSlice } from "../pages/Login/LoginFormDialogSlice"

export const rootReducer = combineReducers({
  loginFormDialog: loginFormDialogSlice,
})