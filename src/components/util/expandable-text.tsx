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

  const textToDisplay = expanded ? text : shortenedText + '...'

  return (
    <Text {...props}>
      {textToDisplay + ' '}
      <Button size={'xs'} h={5} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  )
}
export default ExpandableText
