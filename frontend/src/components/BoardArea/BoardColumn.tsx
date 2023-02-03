import TaskListItem from './TaskListItem'
import { Column } from '../../types'

type ColumnProps = {
  index: number;
  columns: string[];
  column: Column;
}

const BoardColumn = ({ index, columns, column }:ColumnProps) => {

  const colColor = index%3 === 0 ? "bg-[#49C4E5]" : index%3 === 1 ? "bg-[#8471F2]" : "bg-[#67E2AE]"
  return (
    <div className="w-70 text-m-gray font-bold">
      <div className="uppercase text-xs mb-6 flex">
        <div className={`w-[15px] h-[15px] mr-3 rounded-full ${colColor}`}></div>
        <span className="tracking-widest">{column.name} ({column.tasks.length})</span>
      </div>
      {column.tasks.length > 0 &&
        column.tasks.map((task, index) => <TaskListItem key={`${task.title}${index}`} index={index} column={column.name} columns={columns} task={task} />)
      }
    </div>
  )
}

export default BoardColumn