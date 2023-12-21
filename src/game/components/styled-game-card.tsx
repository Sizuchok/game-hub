import { Card, CardProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = CardProps & {
  children: ReactNode
}

const StyledGameCard = ({ children, ...props }: Props) => {
  return (
    <Card {...props} borderRadius={10} overflow="hidden">
      {children}
    </Card>
  )
}
export default StyledGameCard
