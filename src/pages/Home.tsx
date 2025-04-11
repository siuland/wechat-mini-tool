import { useState, useEffect } from 'react'
import { fetchTasks } from '@/utils/api'
import Button from '@/components/Button'

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }
    loadData()
  }, [])

  return (
    <div>
      <h1>任务列表</h1>
      <Button type="primary" onClick={() => alert('新增任务')}>
        添加任务
      </Button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home