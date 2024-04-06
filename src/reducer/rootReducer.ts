import { combineReducers } from "@reduxjs/toolkit"
import loginFormDialogSlice from "../pages/Login/loginFormDialogSlice"


export const rootReducer = combineReducers({
  loginFormDialog: loginFormDialogSlice,
})