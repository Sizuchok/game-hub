import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { GameDetailsParams } from '../../common/types/router-params.types'
import ExpandableText from '../../components/util/expandable-text'
import GameAttributes from '../../game/components/details-page/game-attributes'
import GameBackgroundImage from '../../game/components/details-page/game-background-image'
import GameScreenshots from '../../game/components/details-page/game-screenshots'
import GameTrailer from '../../game/components/details-page/game-trailer'
import { useGame } from '../../game/hooks/use-game.hook'

const GameDetailsPage = () => {
  const { slug } = useParams() as GameDetailsParams

  const { data, isFetching, error } = useGame(slug)
  const game = data!

  if (isFetching) {
    return (
      <Flex height={'100vh'}>
        <Spinner size={'xl'} m={'auto'} />
      </Flex>
    )
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Box as="main" px={5}>
        <Box mx={'auto'} maxW="980px">
          <Heading fontSize={'6xl'} mb={4}>
            {game.name}
          </Heading>
          <ExpandableText text={game.description_raw} />
          <GameAttributes game={game} />
          <GameScreenshots id={game.id} />
          <GameTrailer game={game} />
        </Box>
      </Box>
      <GameBackgroundImage image={game.background_image} />
    </>
  )
}
export default GameDetailsPage
