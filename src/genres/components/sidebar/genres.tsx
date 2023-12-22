import { Box, Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import { GamesQueryParams } from '../../../common/types/games.types'
import SidebarListSkeleton from '../../../components/skeletons/sidebar-list-skeleton'
import { useAllGenres } from '../../hooks/get-all-genres.hook'

type Props = {
  queryParams: GamesQueryParams
  handleGenreChange: (genres: string) => void
}

const Genres = ({ queryParams, handleGenreChange }: Props) => {
  const { isFetching, data } = useAllGenres()

  const skeletons = new Array(10).fill('')
  const genres = data?.results ?? []

  return (
    <Box>
      <Heading fontSize="2xl">Genres</Heading>
      <List
        marginTop={4}
        sx={{
          '& > * + *': {
            marginTop: 2,
          },
        }}
      >
        {isFetching
          ? skeletons.map((_, index) => <SidebarListSkeleton key={index} />)
          : genres.map(genre => (
              <ListItem key={genre.id}>
                <HStack>
                  <Image
                    src={genre.image_background}
                    boxSize={8}
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Button
                    variant="link"
                    onClick={() => handleGenreChange(genre.slug)}
                    justifyContent="start"
                  >
                    <Box
                      as="span"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      fontWeight={queryParams.genres === genre.slug ? 700 : 400}
                    >
                      {genre.name}
                    </Box>
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </Box>
  )
}
export default Genres
