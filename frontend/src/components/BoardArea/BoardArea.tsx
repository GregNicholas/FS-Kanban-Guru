import { useState } from 'react'
import Button from '../Button'
import BoardColumn from './BoardColumn'
import NewColumn from './NewColumn'
import BoardForm from '../Forms/BoardForm'
import { RootState } from "../../app/store";
import { useSelector } from 'react-redux'
import { Board } from '../../types'

const BoardArea = () => {
  const [showBoardForm, setShowBoardForm] = useState(false)

  // get boards and index of current selected board from state
  const displayBoardIndex = useSelector((state: RootState) => state.board.value)
  const {boards, isLoading, isError, message} = useSelector((state: RootState) => state.boards)
  const displayBoard: Board = boards[displayBoardIndex]

  const addColumn = () => {
      setShowBoardForm((prev: boolean) => !prev)
  }

const columns:string[] = displayBoard?.columns

return (
    <main className="flex-1 bg-l-gray dark:bg-v-dark-gray overflow-auto" tabIndex={0}>
        { 
          (displayBoard?.name === "") || !displayBoard ? 
          <div className="text-center relative top-1/3 font-bold">
          { displayBoard 
            ? <>
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <Button text="+ Add New Column" onClick={addColumn} />
              </>
            : <p className="text-m-gray text-lg pb-8">Select a board from the sidebar or create one</p>
          }
          </div>
          :
          <div className="flex p-6 mb-6 gap-6 w-fit overflow-scroll h-full">
            {displayBoard.columns.map((column, index) => (
                <BoardColumn key={`${column}${index}`} index={index} columns={displayBoard.columns} column={column} tasks={displayBoard.tasks} />
            )) }
            <NewColumn addColumn={addColumn} />
          </div>
        }
        {showBoardForm && <BoardForm setShowBoardForm={setShowBoardForm} title="Edit Board" currentBoard={displayBoard} />}
    </main>
  )
}

export default BoardArea