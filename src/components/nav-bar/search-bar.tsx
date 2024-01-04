import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from 'usehooks-ts'
import { useShallow } from 'zustand/react/shallow'
import { useGameQuery } from '../../state/game-query-store'

const SearchBar = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [displayValue, setDisplayValue] = useState<string | undefined>('')
  const debouncedValue = useDebounce<string | undefined>(value, 500)

  const { search, setSearch } = useGameQuery(
    useShallow(state => ({ setSearch: state.setSearchText, search: state.gameQuery.search })),
  )

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
    setDisplayValue(value)
  }

  useEffect(() => {
    if (value != null) setSearch(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    setDisplayValue(search ?? '')
  }, [search])

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
