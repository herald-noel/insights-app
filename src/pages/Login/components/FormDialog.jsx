import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Link,
} from '@mui/material'
import { clickOpen } from '../loginFormDialogSlice'
import { useSelector, useDispatch } from 'react-redux'

// TODO change to REDUX!!
const FormDialog = () => {
  const isOpen = useSelector((state) => state.loginFormDialog.isOpen)
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle sign in logic here (e.g., call API)
    console.log('Sign in with email:', email, 'password:', password)
  }
  return (
    <Dialog open={isOpen} onClose={() => dispatch(clickOpen())}>
      <DialogTitle textAlign={'center'}>Welcome back.</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          sx={{ marginBottom: '10px' }}
        />
        <Link href="#" underline="none">
          Forgot Password?
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(clickOpen())}>Cancel</Button>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
