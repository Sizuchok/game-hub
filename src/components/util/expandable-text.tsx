import { Button, Text, TextProps } from '@chakra-ui/react'
import { useState } from 'react'

type Props = TextProps & {
  text: string
  children?: never
}

const ExpandableText = ({ text, ...props }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const limit = 300

  if (text.length <= limit) return <Text {...props} children={text} />

  const shortenedText = text.substring(0, limit)

  return (
    <Text {...props}>
      {expanded ? text : shortenedText + '...'}
      <Button ml={1} size={'xs'} onClick={() => setExpanded(!expanded)} colorScheme="green">
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </Text>
  )
}
export default ExpandableText