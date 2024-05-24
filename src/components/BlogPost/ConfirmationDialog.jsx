import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material'

const ConfirmationDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Delete Blog Post'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this blog post? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm} style={{ color: 'red' }} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
