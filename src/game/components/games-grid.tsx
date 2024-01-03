import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useGetInfiniteGames } from '../hooks/get-infinite-games.hook'
import GameCard from './game-card'
import GameCardSkeleton from './game-card-skeleton'

const GamesGrid = () => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetInfiniteGames()
  const games = data?.pages.flatMap(page => page.results) ?? []

  const skeletonsAmount = useBreakpointValue({
    sm: 12,
    md: 15,
    xl: 16,
    '2xl': 16,
    '3xl': 15,
  })

  const skeletons = new Array(skeletonsAmount ?? 15).fill('')

  return (
    <InfiniteScroll dataLength={games.length} hasMore={hasNextPage} next={fetchNextPage} loader>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          '2xl': 4,
          '3xl': 5,
        }}
        spacing={6}
      >
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}

        {isFetching && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
      </SimpleGrid>
    </InfiniteScroll>
  )
}
export default GamesGrid
