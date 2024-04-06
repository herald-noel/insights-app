import * as React from 'react'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { clickOpen } from './loginFormDialogSlice'
import FormDialog from './components/FormDialog'

export default function LoginButton() {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Button sx={{ color: '#fff' }} onClick={() => dispatch(clickOpen())}>
        Sign in
      </Button>

      <FormDialog />
    </React.Fragment>
  )
}
