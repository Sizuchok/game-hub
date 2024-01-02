import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../../common/types/games.types'
import { useGetGenre } from '../../../genres/hooks/get-genre.hook'
import { useGetPlatform } from '../../../platforms/hooks/get-platform.hook'

type Props = {
  gameQuery: GameQuery
}

const CurrentFiltersHeading = ({ gameQuery }: Props) => {
  const platform = useGetPlatform(gameQuery.platform)
  const genre = useGetGenre(gameQuery.genre)

  const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`

  return (
    <Heading as="h1" fontSize="7xl">
      {heading}
    </Heading>
  )
}
export default CurrentFiltersHeading
