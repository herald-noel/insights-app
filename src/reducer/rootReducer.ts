import { combineReducers } from "@reduxjs/toolkit"
import signInFormDialogSlice from "../pages/Login/signInFormDialogSlice"


export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
})