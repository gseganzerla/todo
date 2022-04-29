import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { TaskProvider } from '../contexts/TaskContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'
import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </TaskProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
