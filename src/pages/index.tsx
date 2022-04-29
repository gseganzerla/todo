import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiAddLine, RiCheckLine, RiCloseLine, RiEye2Line } from 'react-icons/ri'
import { useMutation, useQuery } from 'react-query'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { IconButton } from '../components/IconButton'
import { useTask } from '../contexts/TaskContext'
import { fetchTasks, Task, updateTask } from '../services/task'

const Home: NextPage = () => {
  const { data, isLoading, isFetching } = useQuery('tasks', fetchTasks)
  const { task: taskShow, setTask } = useTask()

  const { mutateAsync, isLoading: isMutationLoading } = useMutation(updateTask)

  async function handleToggleTask(task: Task) {
    task.is_finished = !task.is_finished
    setTask(task)

    await mutateAsync(task)
  }

  return (
    <Box>
      <Header />
      <Content>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex justify="space-between" align="center" mb="8">
            <Heading>
              Tasks
              {!isLoading && isFetching && <Spinner color="gray.500" ml="4" />}
            </Heading>
            <Link href="/create" passHref>
              <IconButton as="a" icon={RiAddLine}>
                Add Task
              </IconButton>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner size="lg" />
            </Flex>
          ) : (
            <Table>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Created at</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((task) => (
                  <Tr key={task.id}>
                    <Td>{task.title}</Td>
                    <Td>{task.created_at}</Td>
                    <Td>{task.is_finished ? 'Finished' : 'Not finished'}</Td>
                    <Td>
                      <ButtonGroup size="sm" isAttached>
                        <IconButton
                          colorScheme="yellow"
                          disabled
                          icon={RiEye2Line}
                        >
                          View
                        </IconButton>
                        <IconButton
                          colorScheme="purple"
                          icon={task.is_finished ? RiCloseLine : RiCheckLine}
                          onClick={() => handleToggleTask(task)}
                          isLoading={
                            isMutationLoading
                              ? task.id === taskShow.id
                              : isMutationLoading
                          }
                        >
                          {task.is_finished ? 'Undo' : 'Done'}
                        </IconButton>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Content>
    </Box>
  )
}

export default Home
