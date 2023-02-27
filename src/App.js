import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import UserPanelLayout from './layouts/UserPanelLayout'
import { History, Users, Currencies, UserId } from './pages'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ColorModeContext } from 'themes/ThemeProvider'

export default function App() {
  const { toggleColorMode } = React.useContext(ColorModeContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPanelLayout />}>
            <Route index element={<History />} />
            <Route path="/history" element={<History />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<UserId />} />
            <Route path="currencies" element={<Currencies />} />
            <Route path="balance" element={<h1>Balances</h1>} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>

          <Route path="/login" element={<h1>Login Page place holder</h1>} />
        </Routes>
      </BrowserRouter>
      )
      <Fab
        color="secondary"
        onClick={() => toggleColorMode()}
        sx={{
          position: 'fixed',
          right: ({ spacing }) => spacing(3),
          bottom: ({ spacing }) => spacing(3),
        }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}
