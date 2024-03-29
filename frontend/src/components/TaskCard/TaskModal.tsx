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
import { updateBoard } from '../../features/boards/boardSlice'
import { deepCopy } from '../../utils/utils'
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
  const [currentStatus, setCurrentStatus] = useState(task.status)

  const dispatch = useDispatch<AppDispatch>()

  const displayBoardIndex = useSelector((state: RootState) => state.board.value)
  const {boards, isLoading, isError, message} = useSelector((state: RootState) => state.boards)
  const editableBoard = deepCopy(boards[displayBoardIndex])
  const [subs, setSubs] = useState(editableBoard.tasks.filter(t => t.title === task.title)[0].subtasks)

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value)
    const newTask = {...task, status: e.target.value}
    editableBoard.tasks = editableBoard.tasks.map(task => {
      if(task.title === newTask.title){
        return newTask
      } else {
        return task
      }
    })
    dispatch(updateBoard(editableBoard))
    toggleTaskView()
  }

  const changeSubtaskStatus = (title: string) => {
    const updatedSubs = subs.map(subtask => {
      return subtask.title !== title ? subtask : {...subtask, isCompleted: !subtask.isCompleted}
    })

    setSubs(updatedSubs)

    const newTask = {...task, subtasks: updatedSubs}
    editableBoard.tasks = editableBoard.tasks.map(task => {
      if(task.title === newTask.title){
        return newTask
      } else {
        return task
      }
    })
    dispatch(updateBoard(editableBoard))
  }

  const handleDeleteWarning = () => {
    setShowDeleteWarning(true)
  }

  const handleDelete = () => {
    editableBoard.tasks = editableBoard.tasks.filter(t => t._id !== task._id)
    dispatch(updateBoard(editableBoard))
  }
  
  return (
    <ModalContainer>
      {
        showEditTask ? <TaskForm title="Edit Task" currentTask={task} board={editableBoard} column={column} setShowTaskForm={setShowEditTask} showTaskForm={showEditTask} toggleTaskView={toggleTaskView}/>
        : showDeleteWarning 
        ? <DeleteWarning 
            closeModal={() => setShowDeleteWarning(false)} 
            handleDelete={handleDelete}
            title="Delete this task?" 
            message={`Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`}
          />
        : <div 
          className="opacity-100 max-w-[85vw] md:w-120 max-h-[90vh] overflow-auto p-8 bg-white dark:bg-d-gray rounded-lg cursor-default"
          onClick={(e) => {
              e.stopPropagation()
            }
          }
        >
          <div onClick={() => { if(showModal) setShowModal(false)}}
               className="flex mb-6 justify-between gap-6 relative">
            <h3 className="text-lg text-black dark:text-white">{task.title}</h3> 
            <div onClick={() => setShowModal(prev => !prev)} 
                 className="w-10 px-2 py-2.5 rounded-full inline-block text-center cursor-pointer hover:bg-l-gray dark:hover:bg-v-dark-gray">
              <img 
                  className="h-5 px-0.5 inline cursor-pointer" 
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
              {subs.map(subtask => {
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