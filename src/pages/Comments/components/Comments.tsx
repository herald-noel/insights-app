import React from 'react'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from '@mui/material'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

export default function Comments() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        border: 'none', // Remove the border
      }}
    >
      <CardContent>
        <Typography variant="subtitle1">John Doe </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          March 15,2024
        </Typography>
        <span>.</span>
        <Typography variant="body2" color="text.primary">
          Anyone with a head on your sholders should avoid this kind of foolery
          at any cost. I bet your bottom dollar that 3 out of the 6 minimum of
          these "passive income" streams are used to password spray, ddos, tor
          traffic and more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'grey' }}>
          Reply
        </Button>{' '}
      </CardActions>
    </Card>
  )
}
