import TaskListItem from './TaskListItem'
import { Task } from '../../types'

type ColumnProps = {
  index: number;
  columns: string[];
  column: string;
  tasks: Task[];
}

const BoardColumn = ({ index, columns, column, tasks }:ColumnProps) => {
  const columnTasks = tasks.filter(task => task.status === column)

  const colColor = index%3 === 0 ? "bg-[#49C4E5]" : index%3 === 1 ? "bg-[#8471F2]" : "bg-[#67E2AE]"
  return (
    <div className="w-70 text-m-gray font-bold">
      <div className="uppercase text-xs mb-6 flex">
        <div className={`w-[15px] min-w-[15] h-[15px] mr-3 rounded-full ${colColor}`}></div>
        <span className="tracking-widest">{column} ({columnTasks.length})</span>
      </div>
      {columnTasks.length > 0 &&
        columnTasks.map((task, index) => <TaskListItem key={`${task.title}${index}`} index={index} column={column} columns={columns} task={task} />)
      }
    </div>
  )
}

export default BoardColumn