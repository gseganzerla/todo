import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
      {children}
    </Flex>
  )
}
