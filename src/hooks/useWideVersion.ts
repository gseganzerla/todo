import { useBreakpointValue } from '@chakra-ui/react'

export const useWideVersion = () => {
  return useBreakpointValue({
    base: false,
    lg: true,
  })
}
