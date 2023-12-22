import { Heading } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS_GENRES, QUERY_KEYS_PLATFORMS } from '../../../common/const/app-keys.const'
import { RawgRes } from '../../../common/types/base.types'
import { GamesQueryParams } from '../../../common/types/games.types'
import { Genre } from '../../../common/types/genres.type'
import { Platform } from '../../../common/types/platform.type'

type Props = {
  queryParams: GamesQueryParams
}

const CurrentFiltersHeading = ({ queryParams }: Props) => {
  const queryClient = useQueryClient()
  const platformData = queryClient.getQueryData<RawgRes<Platform>>([QUERY_KEYS_PLATFORMS.getAll])
  const genreData = queryClient.getQueryData<RawgRes<Genre>>([QUERY_KEYS_GENRES.getAll])

  const platform = platformData?.results.find(
    platform => platform.id === +queryParams.parent_platforms!,
  )
  const genre = genreData?.results.find(genre => genre.id === +queryParams.genres!)

  const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`

  return (
    <Heading as="h1" fontSize="7xl">
      {heading}
    </Heading>
  )
}
export default CurrentFiltersHeading
