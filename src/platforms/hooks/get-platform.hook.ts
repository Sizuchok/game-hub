import { QUERY_KEYS_PLATFORMS } from '../../common/const/app-keys.const'
import {
  GetFromQueryCacheArgs,
  useGetFromQueryCache,
} from '../../common/hooks/get-from-query-cache.hook'
import { Platform } from '../../common/types/platform.type'

export const useGetPlatform = (id: GetFromQueryCacheArgs['1']) =>
  useGetFromQueryCache<Platform>(QUERY_KEYS_PLATFORMS.getAll, id)
