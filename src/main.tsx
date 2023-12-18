import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './routing/pages/main-page.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  </React.StrictMode>,
)
