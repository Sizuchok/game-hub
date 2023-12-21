import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS_GENRES } from '../../common/const/app-keys.const'
import { RawgRes } from '../../common/types/base.types'
import { Genre } from '../../common/types/genres.type'
import { http } from '../../services'

export const useAllGenres = () => {
  return useQuery({
    queryKey: [QUERY_KEYS_GENRES.getAll],
    queryFn: async () =>
      http.genres.get<RawgRes<Genre>>({
        params: { page_size: 10 },
      }),
  })
}
