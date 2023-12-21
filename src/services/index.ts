import { gamesService as games } from './games.service'
import { genresService as genres } from './genres.service'

export const http = { games, genres } as const
