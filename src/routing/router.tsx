import { createBrowserRouter } from 'react-router-dom'
import { PrimaryLayout } from './layouts/primary-layout'
import ErrorPage from './pages/error-page'
import GameDetailsPage from './pages/game-details-page'
import HomePage from './pages/home-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:id',
        element: <GameDetailsPage />,
      },
    ],
  },
])
