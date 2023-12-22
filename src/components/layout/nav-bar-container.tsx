import { HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const NavBarContainer = ({ children }: Props) => {
  return (
    <HStack
      paddingX={{
        base: 3,
        sm: 10,
      }}
      paddingY={6}
      spacing={{
        base: 4,
        sm: 8,
      }}
    >
      {children}
    </HStack>
  )
}
export default NavBarContainer
