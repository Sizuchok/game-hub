import { Grid, GridItem, Show } from '@chakra-ui/react'
import { LAYOUT_AREAS } from '../../theme/layout-areas.const'

export const MainPage = () => {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.main}"`,
        lg: `"${LAYOUT_AREAS.nav} ${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.aside} ${LAYOUT_AREAS.main}"`,
      }}
    >
      <GridItem area={LAYOUT_AREAS.nav} bg="azure">
        Navbar
      </GridItem>
      <Show above="lg">
        <GridItem area={LAYOUT_AREAS.aside} bg="blanchedalmond">
          ASide
        </GridItem>
      </Show>
      <GridItem area={LAYOUT_AREAS.main} bg="blueviolet">
        Main
      </GridItem>
    </Grid>
  )
}
