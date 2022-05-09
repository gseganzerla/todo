import {
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Content } from '../components/Content'
import { Input } from '../components/Form/Input'
import { Header } from '../components/Header'
import { StackedButtonGroup } from '../components/StackedButtonGroup'
import { queryClient } from '../services/queryClient'
import { CreateTaskFromData, storeTask } from '../services/task'

export default function CreateTask() {
  const { register, handleSubmit } = useForm<CreateTaskFromData>()
  const route = useRouter()

  const { mutateAsync, isLoading } = useMutation(storeTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks')
      console.log('here')

      route.push('/')
    },
  })

  function handleStoreTask(data: CreateTaskFromData) {
    mutateAsync(data)
  }

  return (
    <Box>
      <Header />
      <Content>
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleStoreTask)}
        >
          <Heading>Create Task</Heading>

          <Divider my="6" borderColor="gray.700" />

          <SimpleGrid spacing="5">
            <Input {...register('title')} name="title" />
            <Checkbox {...register('is_finished')} name="is_finished">
              Is finished ?
            </Checkbox>
          </SimpleGrid>

          <StackedButtonGroup mt="5">
            <Button colorScheme="whiteAlpha">Cancel</Button>
            <Button type="submit" isLoading={isLoading}>
              Save
            </Button>
          </StackedButtonGroup>
        </Box>
      </Content>
    </Box>
  )
}
