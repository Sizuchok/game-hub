import { Button, SimpleGrid } from '@chakra-ui/react'
import { GamesQueryParams } from '../../common/types/games.types'
import { useGetInfiniteGames } from '../hooks/get-infinite-games.hook'
import GameCard from './game-card'
import GameCardSkeleton from './game-card-skeleton'

type Props = {
  queryParams: GamesQueryParams
}

const GamesGrid = ({ queryParams }: Props) => {
  const { data, fetchNextPage, isFetching } = useGetInfiniteGames(queryParams)
  const games = data?.pages.flatMap(page => page.results) ?? []
  const skeletons = new Array(15).fill('')

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }}
      spacing={6}
      marginX={8}
    >
      {games.map(game => (
        <GameCard game={game} key={game.id} />
      ))}

      {isFetching && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

      <Button onClick={() => fetchNextPage()}> More</Button>
    </SimpleGrid>
  )
}
export default GamesGrid
