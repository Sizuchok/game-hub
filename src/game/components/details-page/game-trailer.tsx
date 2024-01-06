import { Box } from '@chakra-ui/react'
import { Game } from '../../../common/types/games.types'
import { useGameTrailers } from '../../hooks/use-game-trailer.hook'

type Props = {
  game: Game
}

const GameTrailer = ({ game }: Props) => {
  const { data, error } = useGameTrailers(game.id)
  const first = data?.results[0]

  if (error) {
    throw error
  }

  return (
    <>
      {first ? (
        <Box as="video" src={first.data.max} poster={first.prewiew} controls width={720} mt={5} />
      ) : null}
    </>
  )
}
export default GameTrailer
