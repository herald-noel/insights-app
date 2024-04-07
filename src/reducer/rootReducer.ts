import { combineReducers } from "@reduxjs/toolkit"
import signInFormDialogSlice from "../pages/SignIn/signInFormDialogSlice"
import signUpFormDialogSlice from "../pages/SignUp/signUpFromDialogSlice"


export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
  signUpFormDialog: signUpFormDialogSlice,
})