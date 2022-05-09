import { queryClient } from '../services/queryClient'
import { fetchTaskById, Task } from '../services/task'

export async function usePrefetchTask(task: Task) {
  return await queryClient.prefetchQuery(['task', task.id], () =>
    fetchTaskById(task.id)
  )
}
