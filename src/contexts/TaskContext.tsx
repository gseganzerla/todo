import { createContext, ReactNode, useContext, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { fetchTaskById, Task } from '../services/task'

interface TaskProviderProps {
  children: ReactNode
}

type TaskContextData = {
  task: Task
  setTask: (task: Task) => void
  query: UseQueryResult<Task>
}

export const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TaskProvider({ children }: TaskProviderProps) {
  const [task, setTask] = useState({} as Task)
  const query = useQuery(['tasks', task.id], () => fetchTaskById(task.id), {
    enabled: !!task?.id,
  })

  return (
    <TaskContext.Provider value={{ task, setTask, query }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext)
}
