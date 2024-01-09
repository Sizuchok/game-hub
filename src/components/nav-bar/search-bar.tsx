import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'usehooks-ts'
import { useShallow } from 'zustand/react/shallow'
import { ROUTER_KEYS } from '../../common/const/react-router-keys.const'
import { useGameQuery } from '../../state/game-query-store'

const SearchBar = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [displayValue, setDisplayValue] = useState<string | undefined>('')
  const debouncedValue = useDebounce<string | undefined>(value, 500)
  const navigate = useNavigate()

  const { search, setSearch } = useGameQuery(
    useShallow(state => ({ setSearch: state.setSearchText, search: state.gameQuery.search })),
  )

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
    setDisplayValue(value)
  }

  useEffect(() => {
    //value is null/undefined only on first render
    //this is needed because setSearch call sets ordering prop of gameQuery obj to null
    //if statement prevents it, and makes possible to set default ordering value
    if (value != null) {
      setSearch(debouncedValue)
      navigate(`/${ROUTER_KEYS.GAMES.GAMES}`)
    }
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
