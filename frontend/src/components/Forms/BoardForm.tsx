import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Button from '../Button'
import { AppDispatch } from "../../app/store";
import { useDispatch } from 'react-redux'
import { addBoard, updateBoard } from '../../features/boards/boardSlice'
import { Board } from '../../types'

type BoardFormProps = {
  setShowBoardForm: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  currentBoard?: Board | null
}

const BoardForm = ({ setShowBoardForm, title, currentBoard=null }:BoardFormProps) => {
  const [board, setBoard] = useState<Board>(currentBoard ? {name: currentBoard.name, columns: currentBoard.columns, tasks: currentBoard.tasks, _id: currentBoard._id} 
                            : {
                                name: "",
                                columns: ["planning", "in progress"],
                                tasks: []
                            })

  const dispatch = useDispatch<AppDispatch>()

  const inputTemplateStyle = "text-[13px] font-medium text-black dark:text-white border border-l-lines dark:border-m-gray rounded dark:bg-d-gray"

  const changeColumnInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let newTasks = [...board.tasks].map(task => {
      // test if column that had tasks was deleted
      if(task.status === board.columns[index]){
        return {
          ...task,
          status: e.target.value
        }
      } else {
        return task
      }
    })
    const newColumns = [...board.columns]
    newColumns[index] = e.target.value
    setBoard(prev => ({
      ...prev,
      columns: newColumns,
      tasks: newTasks
    }))
  }

  const addColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setBoard(prev => ({
      ...prev,
      columns: [...prev.columns, ""]
    }))
  }

  const removeColumn = (index: number) => {
    const newColumns = [...board.columns]
    newColumns.splice(index, 1)
    setBoard(prev => ({...prev, columns: newColumns}))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //delete tasks that were in deleted columns
    const tasks = board.tasks.filter(task => {
      return board.columns.includes(task.status)
    })
    const boardData = {
          name: board.name,
          columns: board.columns,
          tasks: tasks,
          _id: board._id
      }

    if(title === "Edit Board"){
      dispatch(updateBoard(boardData))
    } else {
      dispatch(addBoard(boardData))
    }

    setShowBoardForm(false)
  }

  return (
    <ModalContainer closeModal={setShowBoardForm}>
        <div 
          className="z-10 opacity-100 w-120 max-h-[95vh] overflow-scroll p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg text-black mb-6 dark:text-white font-bold">{title}</h3> 
            <label htmlFor="boardName">
              <h5 className="text-3 leading-6 mb-1 text-m-gray font-bold dark:text-white">Name</h5>
            </label>
              <input className={`${inputTemplateStyle} h-full w-full mr-4 mb-6 pl-4 py-2`}
                     name="boardName"
                     type="text" 
                     value={board.name}
                     onChange={e => setBoard(prev => ({...prev, name: e.target.value}))}
                     placeholder="e.g. Web Design"
                     required />
            <div className="flex flex-col mb-6">
            <label htmlFor="column">
            <h5 className="text-3 leading-6 mb-1 text-m-gray font-bold dark:text-white">Columns</h5>
            </label>
            {
              board.columns.map((col, index)=>{
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className={`${inputTemplateStyle} h-full w-full mr-4 pl-4 py-2`}
                           name="column"
                           onChange={(e) => changeColumnInput(index, e)}
                           value={col}
                           type="text" 
                           placeholder="Column Name"
                           aria-label="new column"
                           required
                    />
                    {(board.columns.length!==1) ? 
                      <button type="button" onClick={(e)=> removeColumn(index)} className="text-2xl font-bold pb-[5px]">
                        x
                      </button> : ''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Column" onClick={addColumn} primary={false} />
            </div>
            <Button type="submit" text={title === "Add New Board" ? "Create New Board" : "Save Changes"} />
          </form>
        </div>
    </ModalContainer>
  )
}

export default BoardForm