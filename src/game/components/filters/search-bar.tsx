import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from 'usehooks-ts'
import { GameQuery } from '../../../common/types/games.types'

type Props = {
  gameQuery: GameQuery
  onSearch: (search: string) => void
}

const SearchBar = ({ gameQuery, onSearch }: Props) => {
  const [value, setValue] = useState<string>('')
  const [displayValue, setDisplayValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
    setDisplayValue(value)
  }

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    setDisplayValue(gameQuery.search ?? '')
  }, [gameQuery.search])

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant="filled"
        type="search"
        placeholder="Wrote of tutls..."
        borderRadius="3xl"
        value={displayValue}
        onChange={handleInputChange}
      />
    </InputGroup>
  )
}
export default SearchBar
