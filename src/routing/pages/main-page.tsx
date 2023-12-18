import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from '../../components/layout/nav-bar'
import { LAYOUT_AREAS } from '../../theme/layout-areas.const'

export const MainPage = () => {
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
      <GridItem area={LAYOUT_AREAS.main}>Main</GridItem>
    </Grid>
  )
}
