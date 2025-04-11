import axios from 'axios'

interface Task {
  id: string
  title: string
  completed: boolean
}

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await axios.get<Task[]>('/api/tasks')
  return res.data
}