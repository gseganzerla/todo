import {
  Button,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  UnorderedList,
} from '@chakra-ui/react'
import { useModalShowTask } from '../contexts/ModalShowTaskContext'
import { useTask } from '../contexts/TaskContext'

export function ModalShowTask() {
  const { isOpen, onClose } = useModalShowTask()
  const {
    task,
    query: { isFetching, isLoading },
  } = useTask()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {isLoading ? (
          <ModalBody>
            <Flex justify="center">
              <Spinner />
            </Flex>
          </ModalBody>
        ) : (
          <>
            <ModalHeader>
              Task: {task.title}
              {!isLoading && isFetching && <Spinner size="sm" ml="2" />}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UnorderedList>
                <ListItem>Created at: {task.created_at}</ListItem>
                <ListItem>
                  Status: {task.is_finished ? 'Finished' : 'Not Finished'}
                </ListItem>
              </UnorderedList>
            </ModalBody>
          </>
        )}

        <ModalFooter>
          <Button colorScheme="whiteAlpha" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
