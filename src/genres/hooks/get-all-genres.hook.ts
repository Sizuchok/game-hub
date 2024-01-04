import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../common/const/app-keys.const'
import { http } from '../../services'

export const useAllGenres = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GENRES.GET_ALL],
    queryFn: async () =>
      http.genres.getAll({
        params: { page_size: 10 },
      }),
  })
}
