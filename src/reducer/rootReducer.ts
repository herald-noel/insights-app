import { combineReducers } from '@reduxjs/toolkit'
import signInFormDialogSlice from '../pages/SignIn/signInFormDialogSlice'
import signUpFormDialogSlice from '../pages/SignUp/signUpFromDialogSlice'
import userSlice from './user/userSlice'
import DrawerFormDialogSlice from '../pages/Comments/DrawerFormDialogSlice'
import searchSlice from './search/searchSlice'

export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
  signUpFormDialog: signUpFormDialogSlice,
  user: userSlice,
  DrawerFormDialog: DrawerFormDialogSlice,
  search: searchSlice,
})
