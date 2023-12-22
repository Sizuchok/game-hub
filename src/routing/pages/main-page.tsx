import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import { GameQuery, TwoWayGameSortOrder } from '../../common/types/games.types'
import { Genre } from '../../common/types/genres.type'
import { Platform } from '../../common/types/platform.type'
import MainContainer from '../../components/layout/main-container'
import NavBarContainer from '../../components/layout/nav-bar-container'
import Logo from '../../components/nav-bar/logo'
import ColorModeSwitch from '../../components/switch/color-mode-switch'
import CurrentFiltersHeading from '../../game/components/filters/current-filters-heading'
import PlatformSelector from '../../game/components/filters/platform-selector'
import SearchBar from '../../game/components/filters/search-bar'
import SortSelector from '../../game/components/filters/sort-selector'
import GamesGrid from '../../game/components/games-grid'
import Genres from '../../genres/components/sidebar/genres'

export const MainPage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    ordering: '-added',
  })

  const handleGenreChange = (genre: Genre) => {
    setGameQuery({
      ...gameQuery,
      genre,
    })
  }

  const handlePlatformSelect = (platform: Platform) => {
    setGameQuery({
      ...gameQuery,
      platform,
    })
  }

  const handleSortOrderSelect = (order: TwoWayGameSortOrder) => {
    setGameQuery({
      ...gameQuery,
      ordering: order,
      search: null,
    })
  }

  const handleSearch = (search: string) => {
    setGameQuery({
      ...gameQuery,
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
          <SearchBar gameQuery={gameQuery} onSearch={handleSearch} />
          <ColorModeSwitch />
        </NavBarContainer>
      </GridItem>
      <Show above="lg">
        <GridItem area={LAYOUT_AREAS.aside}>
          <Box as="aside" marginLeft={8} position={'sticky'} top={0}>
            <Genres currentGenre={gameQuery.genre} onGenreChange={handleGenreChange} />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={LAYOUT_AREAS.main}>
        <MainContainer>
          <CurrentFiltersHeading gameQuery={gameQuery} />
          <HStack my={6}>
            <PlatformSelector
              onSelectPlatform={handlePlatformSelect}
              currentPlatform={gameQuery.platform}
            />
            <SortSelector gameQuery={gameQuery} onSelectOrder={handleSortOrderSelect} />
          </HStack>
          <GamesGrid gameQuery={gameQuery} />
        </MainContainer>
      </GridItem>
    </Grid>
  )
}
