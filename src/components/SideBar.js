import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import PaidIcon from '@mui/icons-material/Paid'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Collapse } from '@mui/material'
import logo from 'assets/logo.svg'
import HistoryIcon from '@mui/icons-material/History'

export const drawerWidth = 240
const Navigation = [
  { label: 'Historja', path: '/history', icon: <HistoryIcon /> },
  {
    label: 'Uzytkownicy',
    path: '/users',
    icon: <GroupIcon />,
    submenu: [{ label: 'User', path: '/users/23', icon: <PersonIcon /> }],
  },
  { label: 'Waluty', path: '/currencies', icon: <PaidIcon /> },
  { label: 'Salda', path: '/balance', icon: <AccountBalanceWalletIcon /> },
]

const Link = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
    className={({ isActive }) => (isActive ? props.className + ' Mui-selected' : props.className)}
  />
))

export default function Sidebar() {
  const [open, setOpen] = React.useState(
    Navigation.reduce((acc, item) => (item?.submenu ? { ...acc, [item.path]: false } : acc), {})
  )

  const handleClick = evt => {
    const path = evt.currentTarget.getAttribute('datapath')
    const value = open[path]

    setOpen({ ...open, [path]: !value })
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          '& .MuiListItemIcon-root': {
            minWidth: 36,
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<img style={{ padding: '20px' }} alt="sidebar logo" src={logo} />}
      >
        {Navigation.map(({ label, path, icon, submenu }) =>
          submenu ? (
            <>
              <ListItemButton key={path} onClick={handleClick} datapath={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
                {open[path] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[path]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {submenu.map(({ label, path, icon }) => (
                    <ListItemButton key={path} component={Link} to={path} sx={{ pl: 4 }}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItemButton component={Link} to={path} key={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          )
        )}
      </List>
    </Drawer>
  )
}
