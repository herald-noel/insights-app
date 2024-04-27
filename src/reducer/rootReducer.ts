import { combineReducers } from '@reduxjs/toolkit'
import signInFormDialogSlice from '../pages/SignIn/signInFormDialogSlice'
import signUpFormDialogSlice from '../pages/SignUp/signUpFromDialogSlice'
import userSlice from './user/userSlice'
import DrawerFormDialogSlice from '../pages/Comments/DrawerFormDialogSlice'
import createPostSlice from '../pages/CreatePost/createPostSlice'
import homePageSlice from '../pages/Home/homePageSlice'

export const rootReducer = combineReducers({
  signInFormDialog: signInFormDialogSlice,
  signUpFormDialog: signUpFormDialogSlice,
  user: userSlice,
  DrawerFormDialog: DrawerFormDialogSlice,
  createPost: createPostSlice,
  homePage: homePageSlice,
})
