import { useRoutes } from 'react-router-dom'
import React from 'react'
import { Navigate } from 'react-router-dom'
import UserPanelLayout from './layouts/UserPanelLayout'
import { History, Users, Currencies } from './pages'

export default function Router() {
  let router = useRoutes([
    {
      element: <UserPanelLayout />,
      path: '/',
      children: [
        { index: true, element: <History /> },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'users/:userId',
          element: (
            <div>
              <h4>User ID palce holder</h4>
            </div>
          ),
        },
        {
          path: 'currencies',
          element: <Currencies />,
        },
        {
          path: 'balance',
          element: (
            <div>
              <h4>Balance palce holder</h4>
            </div>
          ),
        },
        {
          path: '*',
          element: <Navigate replace to="/" />,
        },
      ],
    },
    {
      path: '/login',
      element: (
        <div>
          <h1>Login Page place holder</h1>
        </div>
      ),
    },
  ])

  return router
}
