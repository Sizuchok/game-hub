import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { RawgRes } from '../common/types/base.types'
import { Genre } from '../common/types/genres.type'
import { HttpService } from './http.service'

export const genresService = new HttpService<RawgRes<Genre>>(RAWG_ENDPOINTS.genres)
