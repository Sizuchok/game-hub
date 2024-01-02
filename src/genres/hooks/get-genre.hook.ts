import { QUERY_KEYS } from '../../common/const/app-keys.const'
import {
  GetFromQueryCacheArgs,
  useGetFromQueryCache,
} from '../../common/hooks/get-from-query-cache.hook'
import { Genre } from '../../common/types/genres.type'
import { useAllGenres } from './get-all-genres.hook'

export const useGetGenre = (id: GetFromQueryCacheArgs['1']) =>
  useGetFromQueryCache<Genre>(QUERY_KEYS.GENRES.GET_ALL, id)

export const useGetGenre2 = (id: number | undefined) => {
  const { data } = useAllGenres()
  return data?.results.find(genre => genre.id === id)
}
