import PropTypes from 'prop-types'

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'
import Nabvar from './components/common/Navbar'
import getLPTheme from './themes/Themes'

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
        <ToggleButton value={false}>Defalt</ToggleButton>
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

export default function LandingPage() {
  const [mode, setMode] = useState('light')
  const [showCustomTheme, setShowCustomTheme] = useState({})
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
      <Nabvar mode={mode} toggleColorMode={toggleColorMode} />

      <Box sx={{ bgcolor: 'background.default' }}>
        <p>ok</p>
      </Box>
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  )
}
