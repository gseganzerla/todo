import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiAddLine, RiCheckLine, RiEye2Line } from 'react-icons/ri'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { IconButton } from '../components/IconButton'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Content>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex justify="space-between" align="center" mb="8">
            <Heading>Tasks</Heading>
            <Link href="/create" passHref>
              <IconButton as="a" icon={RiAddLine}>
                Add Task
              </IconButton>
            </Link>
          </Flex>

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
              <Tr>
                <Td>Do anything</Td>
                <Td>22/04/22</Td>
                <Td>Finished</Td>
                <Td>
                  <ButtonGroup size="sm" isAttached>
                    <IconButton colorScheme="yellow" disabled icon={RiEye2Line}>
                      View
                    </IconButton>
                    <IconButton colorScheme="purple" icon={RiCheckLine}>
                      Done
                    </IconButton>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Content>
    </Box>
  )
}

export default Home
