import { Badge } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  score: number
}

const CriticScore: FC<Props> = ({ score }) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'

  return (
    <Badge colorScheme={color} fontSize="small" paddingX={2} borderRadius="base">
      {score}
    </Badge>
  )
}
export default CriticScore
