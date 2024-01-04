import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../common/const/app-keys.const'
import { GamesQueryParams } from '../../common/types/games.types'
import { http } from '../../services'
import { useGameQuery } from '../../state/game-query-store'

export const useGetInfiniteGames = () => {
  const { genre, platform, ...rest } = useGameQuery(state => state.gameQuery)

  const queryParams: GamesQueryParams = {
    ...rest,
    genres: genre,
    parent_platforms: platform,
  }

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GAMES.GET_ALL, queryParams],
    queryFn: async ({ pageParam: page = 1 }) =>
      http.games.getAll({
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
