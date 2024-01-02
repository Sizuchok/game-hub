import { QUERY_KEYS } from '../../common/const/app-keys.const'
import {
  GetFromQueryCacheArgs,
  useGetFromQueryCache,
} from '../../common/hooks/get-from-query-cache.hook'
import { Platform } from '../../common/types/platform.type'

export const useGetPlatform = (id: GetFromQueryCacheArgs['1']) =>
  useGetFromQueryCache<Platform>(QUERY_KEYS.PLATFORMS.GET_ALL, id)
