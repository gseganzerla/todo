import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { createContext, ReactNode, useContext } from 'react'

interface ModalShowTaskProviderProps {
  children: ReactNode
}

type ModalShowTaskContextData = UseDisclosureReturn

export const ModalShowTaskContext = createContext<UseDisclosureReturn>(
  {} as ModalShowTaskContextData
)

export function ModalShowTaskProvider({
  children,
}: ModalShowTaskProviderProps) {
  const disclosure = useDisclosure()

  return (
    <ModalShowTaskContext.Provider value={disclosure}>
      {children}
    </ModalShowTaskContext.Provider>
  )
}

export function useModalShowTask() {
  return useContext(ModalShowTaskContext)
}
