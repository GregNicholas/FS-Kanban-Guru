import { useState } from 'react'
import ModalContainer from '../ModalContainer'
import SubtaskItem from './SubtaskItem'
import Select from '../Select'
import EditModal from '../EditModal'
import TaskForm from '../Forms/TaskForm'
import DeleteWarning from '../DeleteWarning'
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { addTask, deleteTask, editSubtasks } from '../../features/boardsSlice'
import { Task } from '../../types'

type TaskModalProps = {
    index: number
    task: Task
    columns: string[]
    column: string
    toggleTaskView: () => void
}

const TaskModal = ({ index, task, columns, column, toggleTaskView }:TaskModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)
  const [showDeleteWarning, setShowDeleteWarning] = useState(false)
  const subtasks = [...task.subtasks]
  const currentStatus = task.status
  const dispatch = useDispatch<AppDispatch>()

  const displayBoardIndex = useSelector((state: RootState) => state.board.value)
  // const board = useSelector((state: RootState) => state.boards[displayBoardIndex])
  const {boards, isLoading, isError, message} = useSelector((state: RootState) => state.boards)
  const displayBoard = boards[displayBoardIndex]

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTask = {...task, status: e.target.value}
    // dispatch(deleteTask({taskTitle: task.title, boardName: board.name, columnName: column}))
    // dispatch(addTask({task: newTask, boardName: board.name, columnName: column})) 
  }

  const changeSubtaskStatus = (title: string) => {
    const newSubtasks = subtasks.map(subtask => {
      return subtask.title !== title ? subtask
             : {...subtask, isCompleted: !subtask.isCompleted}
    })
    const newTask = {...task, subtasks: newSubtasks}
    // dispatch(editSubtasks({task: newTask, index: index, boardName: board.name, columnName: column}))
  }

  const handleDeleteWarning = () => {
    setShowDeleteWarning(true)
  }

  const handleDelete = () => {
    // dispatch(deleteTask({taskTitle: task.title, boardName: board.name, columnName: column}))
  }
  
  return (
    <ModalContainer>
      {
        showEditTask ? <TaskForm title="Edit Task" currentTask={task} board={displayBoard} column={column} setShowTaskForm={setShowEditTask} toggleTaskView={toggleTaskView}/>
        : showDeleteWarning 
        ? <DeleteWarning 
            closeModal={() => setShowDeleteWarning(false)} 
            handleDelete={handleDelete}
            title="Delete this task?" 
            message={`Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`}
          />
        : <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg cursor-default"
          onClick={(e) => {
              e.stopPropagation()
            }
          }
        >
          <div className="flex mb-6 justify-between gap-6 relative">
            <h3 className="text-lg text-black dark:text-white">{task.title}</h3> 
            <div className="w-10 px-2 py-2.5 rounded-full inline-block text-center cursor-pointer hover:bg-l-gray dark:hover:bg-v-dark-gray">
              <img 
                  className="h-5 px-0.5 inline cursor-pointer" 
                  onClick={() => setShowModal(prev => !prev)}
                  src={`/assets/icon-vertical-ellipsis.svg`} 
                  alt="board options" 
              />
            </div>
            {showModal && <EditModal 
                            editText="Edit Task" 
                            deleteText="Delete Task"
                            handleEdit={setShowEditTask}
                            handleDelete={handleDeleteWarning}
                          />}
          </div>
          <p className="text-[13px] font-medium mb-6 leading-6">{task.description}</p>
          <div className="flex flex-col mb-6">
            <h5 className="mb-4">Subtasks ({task.subtasks.filter(sub => sub.isCompleted).length} of {task.subtasks.length})</h5>
            <ul>
              {subtasks.map(subtask => {
                return <SubtaskItem 
                          key={subtask.title}
                          subtask={subtask} 
                          changeSubtaskStatus={() => changeSubtaskStatus(subtask.title)}
                       />
              })}
            </ul>
          </div>
          <div>
            <h5 className="mb-2">Current Status</h5>
            <Select 
              currentStatus={currentStatus} 
              handleStatusChange={handleStatusChange} 
              columns={columns} 
            />
          </div>
          
        </div>
      }
        
      </ModalContainer>
  )
}

export default TaskModal