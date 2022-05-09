import { Stack, StackProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface StackedButtonGroupProps extends StackProps {
  children: ReactNode
}

export function StackedButtonGroup({ children, ...rest }: StackedButtonGroupProps) {
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
