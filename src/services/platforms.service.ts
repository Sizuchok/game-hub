import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { RawgRes } from '../common/types/base.types'
import { Platform } from '../common/types/platform.type'
import { HttpService } from './http.service'

export const platformsService = new HttpService<RawgRes<Platform>>(RAWG_ENDPOINTS.PARENT_PLATFORMS)
