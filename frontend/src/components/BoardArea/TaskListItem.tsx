import { useState } from 'react'
import { Task } from '../../types'
import TaskModal from '../TaskCard/TaskModal'

type TaskListItemProps = {
  index: number
  column: string
  columns: string[]
  task: Task
}

const TaskListItem = ({ index, task, columns, column }:TaskListItemProps) => {
  const [showTask, setShowTask] = useState(false)
  const toggleTaskView = () => {
    setShowTask(prev => !prev)
  }
  return (
    <div onClick={toggleTaskView} className="px-4 py-[23px] mb-5  bg-white text-black hover:text-main-purple dark:text-white dark:hover:text-main-purple dark:bg-d-gray rounded-lg shadow-task cursor-pointer">
      <div className="text-15 mb-2">{task.title}</div>
      <div className="text-xs text-m-gray">{task.subtasks.filter(sub => sub.isCompleted).length} of {task.subtasks.length} subtasks</div>
      {showTask && <TaskModal task={task} index={index} columns={columns} column={column} toggleTaskView={toggleTaskView} />}
    </div>
  )
}

export default TaskListItem