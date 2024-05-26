import PropTypes from 'prop-types'
import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Container,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { openSignUp } from '../../SignUp/signUpFromDialogSlice'

function Hero(props) {
  const { post } = props
  const dispatch = useDispatch()

  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`,
          padding: 5,
          height: '83vh',
          borderRadius: 0
        }}
      >
        {
          <img
            style={{ display: 'none' }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '50px',
          }}
          container
        >
          <Grid item>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                height: '100%',
              }}
            >
              <Container>
                <Typography
                  component="h1"
                  variant="h1"
                  color="inherit"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Button
                  sx={{ width: '200px', height: '50px', marginTop: '20px' }}
                  onClick={() => dispatch(openSignUp())}
                  variant="contained"
                >
                  {post.linkText}
                </Button>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={12} sx={{ mt: 'auto' }}>
        <Box
          sx={{
            backgroundColor: 'rgb(25, 118, 210)',
            color: '#fff',
            p: 2.5,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="inherit">
            © 2024 Insights. All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </>
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
