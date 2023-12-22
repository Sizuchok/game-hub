import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { MAX_WIDTH } from '../../common/theme/sizing.const'

type Props = {
  children: ReactNode
}

const MainContainer = ({ children }: Props) => {
  return (
    <Box maxWidth={MAX_WIDTH} marginX="auto">
      <Box
        marginX={{
          base: 3,
          sm: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
export default MainContainer
