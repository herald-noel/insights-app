import { combineReducers } from "@reduxjs/toolkit"
import signInFormDialogSlice from "../pages/SignIn/signInFormDialogSlice"


export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
})