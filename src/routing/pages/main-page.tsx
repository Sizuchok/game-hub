import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import { useGetInfiniteGames } from '../../common/hooks/get-all-games.hook'
import NavBar from '../../components/layout/nav-bar'
import { LAYOUT_AREAS } from '../../theme/layout-areas.const'

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
        {data?.pages.map(({ results }) =>
          results.map(game => <div key={game.id}>{game.name}</div>),
        )}
        <Button onClick={() => fetchNextPage}> More</Button>
      </GridItem>
    </Grid>
  )
}
