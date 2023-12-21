import { Box, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import { MAX_WIDTH } from '../../common/theme/sizing.const'
import { GamesQueryParams } from '../../common/types/games.types'
import NavBar from '../../components/layout/nav-bar'
import GamesGrid from '../../game/components/games-grid'
import Genres from '../../genres/components/sidebar/genres'

export const MainPage = () => {
  const [queryParams, setQueryParams] = useState<GamesQueryParams>({})

  const handleGenreChange = (genres: string) => {
    setQueryParams({
      ...queryParams,
      genres,
    })
  }

  return (
    <Grid
      gridTemplateAreas={{
        base: `"${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.main}"`,
        lg: `"${LAYOUT_AREAS.nav} ${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.aside} ${LAYOUT_AREAS.main}"`,
      }}
      gridTemplateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={LAYOUT_AREAS.nav}>
        <NavBar />
        {/* <Box maxWidth={MAX_WIDTH} marginX="auto">
          </Box> */}
      </GridItem>
      <Show above="lg">
        <GridItem area={LAYOUT_AREAS.aside}>
          <Box as="aside" marginLeft={8} position={'sticky'} top={0}>
            <Genres handleGenreChange={handleGenreChange} />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={LAYOUT_AREAS.main}>
        <Box maxWidth={MAX_WIDTH} marginX="auto">
          <GamesGrid queryParams={queryParams} />
        </Box>
      </GridItem>
    </Grid>
  )
}
