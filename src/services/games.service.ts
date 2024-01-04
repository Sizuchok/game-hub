import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { Game } from '../common/types/games.types'
import { HttpService } from './http.service'

export const gamesService = new HttpService<Game>(RAWG_ENDPOINTS.GAMES)
