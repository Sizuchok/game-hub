import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import NavBar from '../../components/layout/nav-bar'
import GamesGrid from '../../game/components/games-grid'
import { useGetInfiniteGames } from '../../game/hooks/get-infinite-games.hook'

export const MainPage = () => {
  const { data, fetchNextPage } = useGetInfiniteGames()

  return (
    <Grid
      gridTemplateAreas={{
        base: `"${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.main}"`,
        lg: `"${LAYOUT_AREAS.nav} ${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.aside} ${LAYOUT_AREAS.main}"`,
      }}
    >
      <GridItem area={LAYOUT_AREAS.nav}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={LAYOUT_AREAS.aside}>ASide</GridItem>
      </Show>
      <GridItem area={LAYOUT_AREAS.main}>
        {data?.pages && <GamesGrid gamePages={data.pages} />}
        <Button onClick={() => fetchNextPage()}> More</Button>
      </GridItem>
    </Grid>
  )
}
