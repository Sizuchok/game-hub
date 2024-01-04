import { Box, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import backgroundPlaceholder from '../../assets/game-backgroud-image-placeholder.jpg'
import { Game } from '../../common/types/games.types'
import { getCroppedImageUrl } from '../../services/utils/get-croppod-image-url.util'
import CriticScore from './critic-score'
import GamePlatforms from './game-platforms'
import RatingIcon from './rating-icon'
import StyledGameCard from './styled-game-card'

type Props = {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms?.map(({ platform }) => platform)

  return (
    <StyledGameCard
      _hover={{
        transform: 'scale(1.03)',
        transition: 'all .3s',
      }}
      transform="scale(1)"
      transition="all .3s"
    >
      <Image
        src={
          game.background_image ? getCroppedImageUrl(game.background_image) : backgroundPlaceholder
        }
      />
      <CardBody>
        <Box position="relative" height="100%">
          <HStack justifyContent="space-between" marginY={1} height={'21px'}>
            <GamePlatforms platforms={platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <RatingIcon rating={game.rating_top} />
        </Box>
      </CardBody>
    </StyledGameCard>
  )
}
export default GameCard
