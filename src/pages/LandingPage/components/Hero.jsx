import PropTypes from 'prop-types'
import { Paper, Typography, Grid, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Hero(props) {
  const { post } = props

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        padding: 5,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: 'left',
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Button component={Link} to="signup" variant="contained">
              {post.linkText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

Hero.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Hero
