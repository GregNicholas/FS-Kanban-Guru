import { Subtask } from '../../types'

type SubtaskProps = {
    subtask: Subtask;
    changeSubtaskStatus: (title: string, isChecked: boolean) => void;
}

const SubtaskItem = ({ subtask, changeSubtaskStatus }:SubtaskProps) => {
  const isChecked = subtask.isCompleted

  return (
    <li key={subtask.title} className="flex items-center h-10 mb-2 rounded bg-l-gray dark:bg-v-dark-gray">
        <label className="flex">
        <input 
            onChange={() => {
                changeSubtaskStatus(subtask.title, !isChecked)
              }}
            type="checkbox" 
            checked={isChecked} 
            className="checked:bg-main-purple ml-4 mr-[20px]" 
        />
            <span className={`${isChecked ? 'line-through' : ''}`}>{subtask.title}</span>
        </label>
    </li>
  )
}

export default SubtaskItem