import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Link,
} from '@mui/material'
import { openSignIn } from '../signInFormDialogSlice'
import { useSelector, useDispatch } from 'react-redux'
import useSignIn from '../hooks/useSignIn'

// TODO change to REDUX!!
const SignInFormDialog = () => {
  const isOpen = useSelector((state) => state.signInFormDialog.isOpen)
  const dispatch = useDispatch()

  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    emailError,
    emailErrorMsg,
  } = useSignIn()

  return (
    <Dialog open={isOpen} onClose={() => dispatch(openSignIn())}>
      <DialogTitle textAlign={'center'}>Welcome back.</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: '10px' }}
            error={emailError}
            helperText={emailErrorMsg}
          />
          <Link href="#" underline="none">
            Forgot Password?
          </Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(openSignIn())}>Cancel</Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SignInFormDialog
