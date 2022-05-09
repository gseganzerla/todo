import {
  Button,
  ButtonProps,
  Icon,
  IconButton as ChakraIconButton,
} from '@chakra-ui/react'
import { ElementType, ReactNode } from 'react'
import { useWideVersion } from '../hooks/useWideVersion'

interface IconButtonProps extends ButtonProps {
  icon: ElementType
  children: ReactNode
  ariaLabel?: string
}

export function IconButton({
  icon,
  children,
  ariaLabel = '',
  ...rest
}: IconButtonProps) {
  const isWideVersion = useWideVersion()

  return (
    <>
      {isWideVersion && (
        <Button leftIcon={<Icon as={icon} />} {...rest}>
          {children}
        </Button>
      )}

      {!isWideVersion && (
        <ChakraIconButton
          aria-label=""
          icon={<Icon as={icon} />}
          {...rest}
        ></ChakraIconButton>
      )}
    </>
  )
}
