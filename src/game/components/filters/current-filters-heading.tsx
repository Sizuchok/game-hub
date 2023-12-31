import { Heading } from '@chakra-ui/react'
import { useShallow } from 'zustand/react/shallow'
import { useCachedGenre } from '../../../genres/hooks/get-genre.hook'
import { useCachedPlatform } from '../../../platforms/hooks/get-platform.hook'
import { useGameQuery } from '../../../state/game-query-store'

const CurrentFiltersHeading = () => {
  const { genreId, platformId } = useGameQuery(
    useShallow(state => ({ platformId: state.gameQuery.platform, genreId: state.gameQuery.genre })),
  )
  const platform = useCachedPlatform(platformId)
  const genre = useCachedGenre(genreId)

  const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`

  return (
    <Heading as="h1" fontSize="7xl">
      {heading}
    </Heading>
  )
}
export default CurrentFiltersHeading
