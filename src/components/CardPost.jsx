import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material'

function CardPost(props) {
  const { post } = props

  return (
    <Grid item xs={12} md={6} py={1}>
      <CardActionArea component={Link} to="blog">
        <Card
          sx={{
            display: 'flex',
            textAlign: 'left',
          }}
          variant="outlined"
        >
          <CardContent sx={{ flex: 1 }}>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Typography variant="subtitle1">John Doe </Typography>
              <span>⋅</span>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
            </Grid>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>

            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

CardPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default CardPost
