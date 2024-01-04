import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { Genre } from '../common/types/genres.type'
import { HttpService } from './http.service'

export const genresService = new HttpService<Genre>(RAWG_ENDPOINTS.GENRES)
