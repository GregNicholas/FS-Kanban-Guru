import { useState } from 'react'
import Button from '../Button'
import BoardColumn from './BoardColumn'
import NewColumn from './NewColumn'
import BoardForm from '../Forms/BoardForm'
import { RootState } from "../../app/store";
import { useSelector } from 'react-redux'

const BoardArea = () => {
  const [showBoardForm, setShowBoardForm] = useState(false)
  // const displayBoardIndex = useSelector((state: RootState) => state.board.value)
  // const displayBoard = useSelector((state: RootState) => state.boards.value[displayBoardIndex])

    const addColumn = () => {
        setShowBoardForm((prev: boolean) => !prev)
    }

// const columns:string[] = displayBoard?.columns.map(column => column.name)

return (
    <main className="flex-1 bg-l-gray dark:bg-v-dark-gray overflow-auto" tabIndex={0}>
      {/* the following p is for testing purposes only: */}
      <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
        {/* { 
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
                <BoardColumn key={`${column.name}${index}`} index={index} columns={columns} column={column} />
            )) }
            <NewColumn onClick={addColumn} />
          </div>
        } */}
        {/* {showBoardForm && <BoardForm setShowBoardForm={setShowBoardForm} title="Edit Board" boardIndex={displayBoardIndex} currentBoard={displayBoard} />} */}
    </main>
  )
}

export default BoardArea