import { HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const NavBarContainer = ({ children }: Props) => {
  return (
    <HStack paddingX={10} paddingY={6} spacing={8}>
      {children}
    </HStack>
  )
}
export default NavBarContainer
