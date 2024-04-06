import { CssBaseline } from '@mui/material'
import Router from './routes/router'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
