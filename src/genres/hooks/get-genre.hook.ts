import { QUERY_KEYS } from '../../common/const/app-keys.const'
import {
  GetFromQueryCacheArgs,
  useGetFromQueryCache,
} from '../../common/hooks/get-from-query-cache.hook'
import { Genre } from '../../common/types/genres.type'

export const useCachedGenre = (id: GetFromQueryCacheArgs['1']) =>
  useGetFromQueryCache<Genre>(QUERY_KEYS.GENRES.GET_ALL, id)
