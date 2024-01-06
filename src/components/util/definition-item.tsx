import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize={'xl'} color={'gray.600'} mb={1}>
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}
export default DefinitionItem
