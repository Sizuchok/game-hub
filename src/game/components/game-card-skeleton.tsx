import { CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import StyledGameCard from './styled-game-card'

const GameCardSkeleton = () => {
  return (
    <StyledGameCard>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </StyledGameCard>
  )
}
export default GameCardSkeleton
