import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@mui/material'
import { clickOpen } from '../loginFormDialogSlice'
import { useSelector, useDispatch } from 'react-redux'

const FormDialog = () => {
  const isOpen = useSelector((state) => state.loginFormDialog.isOpen)
  const dispatch = useDispatch()
  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(clickOpen())}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const formJson = Object.fromEntries(formData.entries())
          const email = formJson.email
          console.log(email)
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(clickOpen())}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
