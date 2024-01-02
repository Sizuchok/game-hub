import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { RawgRes } from '../common/types/base.types'
import { Game } from '../common/types/games.types'
import { HttpService } from './http.service'

export const gamesService = new HttpService<RawgRes<Game>>(RAWG_ENDPOINTS.games)
