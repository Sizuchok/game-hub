import { CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import BackgroundPlaceholder from '../../assets/game-backgroud-image-placeholder.jpg'
import { Game } from '../../common/types/games.types'
import { getCroppedImageUrl } from '../../services/utils/get-croppod-image-url.util'
import CriticScore from './critic-score'
import GamePlatforms from './game-platforms'
import StyledGameCard from './styled-game-card'

type Props = {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <StyledGameCard>
      <Image
        src={
          game.background_image ? getCroppedImageUrl(game.background_image) : BackgroundPlaceholder
        }
      />
      <CardBody>
        <HStack justifyContent="space-between" marginY={1} height={'21px'}>
          <GamePlatforms platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </StyledGameCard>
  )
}
export default GameCard
