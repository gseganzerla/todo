import { Stack, StackProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface StackedButtonProps extends StackProps {
  children: ReactNode
}

export function StackedGroupButton({ children, ...rest }: StackedButtonProps) {
  return (
    <Stack
      maxW={1480}
      direction={{ base: 'column', lg: 'row' }}
      justify="flex-end"
      {...rest}
    >
      {children}
    </Stack>
  )
}
