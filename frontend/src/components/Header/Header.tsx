import { useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'
import EditModal from '../EditModal'
import TaskForm from '../Forms/TaskForm'
import DeleteWarning from '../DeleteWarning'
import BoardForm from '../Forms/BoardForm'
import Sidebar from '../Sidebar/Sidebar'
import ModalContainer from '../ModalContainer'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from 'react-redux'
import { deleteBoard } from '../../features/boards/boardSlice'
import { setDisplayBoard } from '../../features/boards/displayBoardSlice'
import { Transition } from '@headlessui/react'

type HeaderProps = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ isDarkMode, setIsDarkMode, showSidebar, setShowSidebar }:HeaderProps) => {
    const [showModal, setShowModal] = useState(false)
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [showDeleteWarning, setShowDeleteWarning] = useState(false)
    const [showBoardForm, setShowBoardForm] = useState(false)

    const displayBoardIndex = useSelector((state: RootState) => state.board.value)
    const {boards} = useSelector((state: RootState) => state.boards)
    const displayBoard = boards[displayBoardIndex]
    
    const dispatch = useDispatch<AppDispatch>()

    const toggleShowTaskForm = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setShowTaskForm(prev => !prev)
    }

    const nameClasses = !showSidebar ? "mx-auto pl-6 sm:ml-12 md:ml-44" : "mx-auto pl-6 sm:ml-0"
    const showMobileLogo = `${showSidebar ? "sm:hidden" : "md:hidden"}`

    const hideModal = () => setShowModal(false)

    const handleDeleteWarning = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setShowDeleteWarning(true)
      }

    const handleDelete = () => {
        if(displayBoard._id){
            dispatch(deleteBoard(displayBoard._id))
        }
        dispatch(setDisplayBoard(0))
    }

    const showBoardsListMobile = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        if(window.innerWidth < 640){
            setShowSidebar(prev => !prev)
        }
    }
    
    return (
        <header onClick={(e) => {
            hideModal()
            setShowTaskForm(false)
        }} 
            className="w-full min-h-[72px] h-fit py-4 pl-6 pr-2 sm:pr-4 md:pr-6 flex items-center justify-between border-b border-l-lines bg-white dark:bg-d-gray dark:border-d-lines transition-all">
            {!showSidebar && <h1><Logo isDarkMode={isDarkMode} showSidebar={showSidebar} /></h1> }
            <img className={`${showMobileLogo} absolute left-4 top-5 sm:left-7 sm:top-7 h-6 mb-14`} src={`/assets/logo-mobile.svg`} alt="kanban logo" />
            <div onClick={showBoardsListMobile} className={`flex items-center h-full md:pl-0 ${nameClasses}`}>
                {!showSidebar && <div className="hidden sm:block w-px h-full mr-8 md:border-l md:border-l-lines md:dark:border-d-lines"></div>}
                <h2 onClick={showBoardsListMobile} className={`font-bold font-sans cursor-default text-black dark:text-white text-center text-lg sm:text-xl md:text-2xl`}>{displayBoard?.name}</h2>
                { !showSidebar 
                    ? <img className="mx-1 sm:hidden" src={`/assets/icon-chevron-down.svg`} alt="chevron down"/>
                    : <img className="mx-1 sm:hidden" src={`/assets/icon-chevron-up.svg`} alt="chevron down"/>
                }
            </div>
            <div className="min-w-fit">
                { displayBoard?.name  
                ? <>
                    <span className="hidden md:inline"><Button text=" + Add New Task " onClick={toggleShowTaskForm} widthFull={false} /></span>
                    <button 
                        className={`md:hidden box-border font-bold rounded-3xl p-0 h-8 w-12 text-white bg-main-purple hover:bg-main-purple-hover hover:text-main-purpleactive:bg-white active:text-main-purple`}
                        onClick={(e) => toggleShowTaskForm(e)}
                    >
                        +
                    </button>
                    <div className="w-10 ml-4 p-2 rounded-full inline-block text-center cursor-pointer hover:bg-l-gray dark:hover:bg-v-dark-gray"
                            onClick={(e) => {
                                e.stopPropagation()
                                setShowModal(prev => !prev)}}
                    >
                    <img className="h-5 inline" src={`/assets/icon-vertical-ellipsis.svg`} 
                        alt="board options" 
                    />
                    </div>
                  </>
                : null }
                <Transition
                    show={showTaskForm}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <TaskForm setShowTaskForm={setShowTaskForm} showTaskForm={showTaskForm} board={displayBoard} title="Add New Task" />
                </Transition>
                {showModal && <EditModal 
                                editText="Edit Board" 
                                deleteText="Delete Board"
                                handleEdit={setShowBoardForm}
                                handleDelete={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => handleDeleteWarning(e)}
                            />}
                {showDeleteWarning && 
                    <DeleteWarning 
                        closeModal={() => setShowDeleteWarning(false)} 
                        handleDelete={handleDelete}
                        title="Delete this board?"
                        message={`Are you sure you want to delete the ‘${displayBoard?.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}
                    />
                }
                <Transition
                    show={showBoardForm}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <BoardForm setShowBoardForm={setShowBoardForm} showBoardForm={showBoardForm} title="Edit Board" currentBoard={displayBoard} />
                </Transition>
            </div>
            <div className="sm:hidden">
            {showSidebar && 
                <ModalContainer closeModal={() => setShowSidebar(false)}>
                    <Sidebar 
                        isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
                        showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
                        isMobile={true}
                    />
                </ModalContainer>
            }
            </div>
        </header>
    )
}

export default Header