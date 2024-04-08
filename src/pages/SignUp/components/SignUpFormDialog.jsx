import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material'
import { openSignUp } from '../signUpFromDialogSlice'
import { openSignIn } from '../../SignIn/signInFormDialogSlice'
import { useSelector, useDispatch } from 'react-redux'

const SignUpFormDialog = () => {
  const isOpen = useSelector((state) => state.signUpFormDialog.isOpen)
  const dispatch = useDispatch()

  const handleLinkSignIn = () => {
    dispatch(openSignIn())
    dispatch(openSignUp())
  }

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState(false)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError(true)
      setPasswordErrorMsg('Password does not match.')
      return true
    } else if (password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMsg('Password must be atleast 6 characters.')
      return true
    }
    setPasswordError(false)
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validatePassword()) return
    console.log('Sign up with:', firstName, lastName, email, password)
  }
  return (
    <Dialog open={isOpen} onClose={() => dispatch(openSignUp())}>
      <DialogTitle textAlign={'center'}>Join Insights.</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              autoFocus
              margin="dense"
              label="First Name"
              fullWidth
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </Box>
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            required
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
            helperText={passwordError ? passwordErrorMsg : ''}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(openSignUp())}>Cancel</Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginRight: '24px' }}
          >
            Sign Up
          </Button>
        </DialogActions>
      </form>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body4">
          Already have an account?{' '}
          <Button onClick={handleLinkSignIn} underline="none">
            Sign In
          </Button>
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpFormDialog
