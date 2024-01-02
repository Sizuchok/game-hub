import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEYS_GAMES } from '../../common/const/app-keys.const'
import { GameQuery, GamesQueryParams } from '../../common/types/games.types'
import { http } from '../../services'

export const useGetInfiniteGames = ({ genre, platform, ...rest }: GameQuery) => {
  const queryParams: GamesQueryParams = {
    ...rest,
    genres: genre,
    parent_platforms: platform,
  }

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS_GAMES.getAll, queryParams],
    queryFn: async ({ pageParam: page = 1 }) =>
      http.games.get({
        params: {
          ...queryParams,
          page,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (!lastPage.next) return undefined
      const nextPageNumber = new URLSearchParams(lastPage.next).get('page')
      return +nextPageNumber!
    },
  })
}
