import { gamesService as games } from './games.service'
import { genresService as genres } from './genres.service'
import { platformsService as platforms } from './platforms.service'

export const http = { games, genres, platforms } as const
