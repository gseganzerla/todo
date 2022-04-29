import { api } from './api'

export type Task = {
  id: string
  title: string
  is_finished: boolean
  created_at: string
}

export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await api.get('tasks')

  return data.tasks
}
