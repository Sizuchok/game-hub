/* eslint-disable react-hooks/exhaustive-deps */
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from 'usehooks-ts'
import { GameQuery } from '../../../common/types/games.types'

type Props = {
  gameQuery: GameQuery
  onSearch: (search: string) => void
}

const SearchBar = ({ gameQuery, onSearch }: Props) => {
  const [value, setValue] = useState<string>('')
  const [showValue, setShowValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    setShowValue(gameQuery.search ?? '')
  }, [gameQuery.search])

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant="filled"
        type="search"
        placeholder="Wrote of tutls..."
        borderRadius="3xl"
        value={showValue}
        onChange={event => {
          setValue(event.target.value)
          setShowValue(event.target.value)
        }}
      />
    </InputGroup>
  )
}
export default SearchBar
