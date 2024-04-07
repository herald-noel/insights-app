import * as React from 'react'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { clickOpen } from './signInFormDialogSlice'
import SignInFormDialog from './components/SignInFormDialog'

export default function SignInButton() {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Button sx={{ color: '#fff' }} onClick={() => dispatch(clickOpen())}>
        Sign in
      </Button>

      <SignInFormDialog />
    </React.Fragment>
  )
}
