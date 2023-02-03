import { useState } from 'react'
import SelectBoardTitle from "./SelectBoardTitle"
import BoardForm from '../Forms/BoardForm'
import { RootState } from "../../app/store";
import { useSelector } from 'react-redux'

const SelectBoard = () => {
  const [ showBoardForm, setShowBoardForm ] = useState(false)
  // const boardsData = useSelector((state: RootState) => state.boards.value)

  return (
    <section className="text-base font-bold text-m-gray fill-m-gray" 
             onClick={(e) => {
               e.stopPropagation()
              }
             }
    >
        {/* <h3 className="text-xs mb-4 pl-8 tracking-widest">ALL BOARDS ({boardsData?.length})</h3> */}
        {/* {boardsData && <ul className="cursor-pointer">
            {boardsData.map((board, index) => {
                return <SelectBoardTitle key={board.name} 
                          board={board} 
                          index={index}
                />
            })}
            <li 
              className={`flex items-center text-main-purple fill-main-purple hover:bg-main-purple hover:bg-opacity-10 py-3.5 pl-8 transition duration-300 mr-6 rounded-r-3xl`}
              onClick={() => setShowBoardForm(prev => !prev)}
            >
                <svg className="h-4 mr-3.5 inline" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"/></svg>
                + Create New Board
            </li>
        </ul>} */}
        {showBoardForm && <BoardForm setShowBoardForm={setShowBoardForm} title="Add New Board" />}
    </section>
  )
}

export default SelectBoard