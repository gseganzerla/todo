import { api } from './api'

export type Task = {
  id: string
  title: string
  is_finished: boolean
  created_at: string
}

export type CreateTaskFromData = Omit<Task, 'id' | 'created_at'>

export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await api.get('tasks')

  return data.tasks
}

export const fetchTaskById = async (id: string): Promise<Task> => {
  const { data } = await api.get(`tasks/${id}`)

  return data.task
}

export const updateTask = async (task: Task): Promise<Task> => {
  const { data } = await api.put(`tasks/${task.id}`, {
    task: task,
  })

  return data.task
}

export const storeTask = async (task: CreateTaskFromData): Promise<Task> => {
  const { data } = await api.post('tasks', {
    task: {
      ...task,
      created_at: new Date(),
    },
  })

  return data.task
}
