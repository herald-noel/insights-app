import { combineReducers } from "@reduxjs/toolkit"
import signInFormDialogSlice from "../pages/SignIn/signInFormDialogSlice"
import signUpFormDialogSlice from "../pages/SignUp/signUpFromDialogSlice"
import userSlice from "./user/userSlice"


export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
  signUpFormDialog: signUpFormDialogSlice,
  user: userSlice
})