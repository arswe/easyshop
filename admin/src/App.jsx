import { Box, CssBaseline, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import getLPTheme from './themes/Themes'

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import PropTypes from 'prop-types'

import Navbar from './components/common/Navbar'

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Platform'
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom
        </ToggleButton>
        <ToggleButton value={false}>Default</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
}

function App() {
  const [mode, setMode] = useState('light')
  const [showCustomTheme, setShowCustomTheme] = useState(true)
  const LPtheme = createTheme(getLPTheme(mode))
  const defaultTheme = createTheme({ palette: { mode } })

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev)
  }

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />

      <Box sx={{ bgcolor: 'background.default' }}>Hello</Box>
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  )
}

export default App
