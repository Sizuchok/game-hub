import { createBrowserRouter } from 'react-router-dom'
import { ROUTER_KEYS } from '../common/const/react-router-keys.const'
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
        path: `${ROUTER_KEYS.GAMES.GAMES}/:${ROUTER_KEYS.GAMES.GAME_ID}`,
        element: <GameDetailsPage />,
      },
    ],
  },
])
