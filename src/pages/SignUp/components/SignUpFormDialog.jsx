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

// TODO change to REDUX!!
const SignUpFormDialog = () => {
  const isOpen = useSelector((state) => state.signUpFormDialog.isOpen)
  const dispatch = useDispatch()

  const handleLinkSignIn = () => {
    dispatch(openSignIn())
    dispatch(openSignUp())
  }

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle sign up logic here (e.g., call API)
    console.log('Sign up with:', name, email, password)
  }
  return (
    <Dialog open={isOpen} onClose={() => dispatch(openSignUp())}>
      <DialogTitle textAlign={'center'}>Join Insights.</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Last Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
        </Box>
        <TextField
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
        />
        <TextField
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(openSignUp())}>Cancel</Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{ marginRight: '24px' }}
        >
          Sign Up
        </Button>
      </DialogActions>
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
