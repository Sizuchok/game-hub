import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import NavBar from '../../components/nav-bar/nav-bar'
import Sidebar from '../../components/sidebar/sidebar'

export const PrimaryLayout = () => {
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
      position={'relative'}
      pb={8}
    >
      <GridItem area={LAYOUT_AREAS.nav}>
        <NavBar />
      </GridItem>
      <GridItem area={LAYOUT_AREAS.aside}>
        <Sidebar />
      </GridItem>
      <GridItem area={LAYOUT_AREAS.main}>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
