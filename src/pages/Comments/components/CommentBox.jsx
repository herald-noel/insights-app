import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { openDrawer } from '../DrawerFormDialogSlice'

export default function CommentBox() {
  const dispatch = useDispatch()
  return (
    <Card
      sx={{
        minWidth: 400,

        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <TextField
          id="outlined-multiline-flexible"
          label="What are your thoughts?"
          multiline
          maxRows={50}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ width: '100%' }}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          size="small"
          sx={{ color: 'grey' }}
          onClick={() => dispatch(openDrawer())}
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ bgcolor: 'sky-blue', color: 'white' }}
        >
          Respond
        </Button>
      </CardActions>
    </Card>
  )
}
