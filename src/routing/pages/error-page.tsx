import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const isRouteError = isRouteErrorResponse(error)

  return (
    <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        {isRouteError && <Text fontSize={'12rem'}>{error.status}</Text>}
        <Text fontSize={'xl'} mb={12}>
          Whoops!
          <br />
          {isRouteError ? "We couldn't find that page." : 'An unexpected error occured.'}
        </Text>
        <Button as={Link} to={'/'} size={'lg'} w={'full'}>
          Main Page
        </Button>
      </Box>
    </Flex>
  )
}
export default ErrorPage
