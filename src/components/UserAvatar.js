import * as React from 'react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Logout from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { grey, yellow } from '@mui/material/colors'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { ColorModeContext } from 'themes/ThemeProvider'
import avatarImg from 'assets/avatar.png'

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))

export default function UserAvatar({
  props = { user: { type: 'Admin', name: 'Jan Kowalski', email: 'JanKowalski@gmail.com' } },
}) {
  const {
    user: { type, name, email },
  } = props

  const [anchorEl, setAnchorEl] = React.useState()

  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', m: 2 }}>
        <IconButton
          sx={{ ml: 1, mr: 6, color: 'text.secondary' }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Chip sx={{ mr: 6 }} label={type} />
        <Button
          sx={{ borderRadius: 26 }}
          id="customized-button"
          aria-controls={open ? 'customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <Avatar src={avatarImg} alt="user avatar" />
          <Box maxWidth="150px">
            <Typography fontSize={12} fontWeight="800">
              {name}
            </Typography>
            <Typography fontSize={10}>{email}</Typography>
          </Box>
        </Button>
      </Box>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          'aria-labelledby': 'customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
