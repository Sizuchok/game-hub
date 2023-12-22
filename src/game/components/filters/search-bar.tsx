import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from 'usehooks-ts'
import { GamesQueryParams } from '../../../common/types/games.types'

type Props = {
  queryParams: GamesQueryParams
  onSearch: (search: string) => void
}

const SearchBar = ({ queryParams, onSearch }: Props) => {
  const [value, setValue] = useState<string>('')
  const [showValue, setShowValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    setShowValue(queryParams.search ?? '')
  }, [queryParams.search])

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
