import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import { GamesQueryParams, TwoWayGameSortOrder } from '../../common/types/games.types'
import MainContainer from '../../components/layout/main-container'
import NavBarContainer from '../../components/layout/nav-bar-container'
import Logo from '../../components/nav-bar/logo'
import ColorModeSwitch from '../../components/switch/color-mode-switch'
import PlatformSelector from '../../game/components/filters/platform-selector'
import SearchBar from '../../game/components/filters/search-bar'
import SortSelector from '../../game/components/filters/sort-selector'
import GamesGrid from '../../game/components/games-grid'
import Genres from '../../genres/components/sidebar/genres'

export const MainPage = () => {
  const [queryParams, setQueryParams] = useState<GamesQueryParams>({
    ordering: '-added',
  })

  const handleGenreChange = (genres: string) => {
    setQueryParams({
      ...queryParams,
      genres,
    })
  }

  const handlePlatformSelect = (platform: number) => {
    setQueryParams({
      ...queryParams,
      parent_platforms: String(platform),
    })
  }

  const handleSortOrderSelect = (order: TwoWayGameSortOrder) => {
    setQueryParams({
      ...queryParams,
      ordering: order,
      search: null,
    })
  }

  const handleSearch = (search: string) => {
    setQueryParams({
      ...queryParams,
      search,
      ordering: null,
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
        <NavBarContainer>
          <Logo />
          <SearchBar queryParams={queryParams} onSearch={handleSearch} />
          <ColorModeSwitch />
        </NavBarContainer>
      </GridItem>
      <Show above="lg">
        <GridItem area={LAYOUT_AREAS.aside}>
          <Box as="aside" marginLeft={8} position={'sticky'} top={0}>
            <Genres queryParams={queryParams} handleGenreChange={handleGenreChange} />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={LAYOUT_AREAS.main}>
        <MainContainer>
          <HStack my={6}>
            <PlatformSelector onSelectPlatform={handlePlatformSelect} queryParams={queryParams} />
            <SortSelector queryParams={queryParams} onSelectOrder={handleSortOrderSelect} />
          </HStack>
          <GamesGrid queryParams={queryParams} />
        </MainContainer>
      </GridItem>
    </Grid>
  )
}
