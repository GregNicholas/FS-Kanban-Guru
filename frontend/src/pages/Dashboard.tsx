import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import BoardArea from '../components/BoardArea/BoardArea'
import ShowSidebar from '../components/ShowSidebar'
// import { Board, indexedBoard } from '../types'
import { AppDispatch, RootState } from "../app/store"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBoards, reset } from '../features/boards/boardSlice'
import data from '../data.json'
import BoardForm from '../components/Forms/BoardForm'
import Loader from '../components/Loader'

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
// TEMP: 
// const [showBoardForm, setShowBoardForm] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {user} = useSelector((state: RootState) => state.auth)
  const {boards, isLoading, isError, message} = useSelector((state: RootState) => state.boards)

  if(isError){
    console.log(message)
  }

  useEffect(() => {
    if(!user) {
      navigate('/login')
    } else {
      console.log("Get boards in dashboard")
      dispatch(getBoards()) 
    }

    return () => {
      dispatch(reset())
    }
  }, [user, dispatch])
 
  if(isLoading) {
    return <Loader />
  }
  
  return (
    <div className={`flex h-full ${isDarkMode && "dark"}`}>
      <Sidebar 
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
          showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
      />
      <div className="flex flex-col flex-1 overflow-auto" tabIndex={0}>
        <Header 
            isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
            showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
         />
        <BoardArea />
      </div>
      {!showSidebar && <ShowSidebar setShowSidebar={setShowSidebar} />}
    </div>
  )
}

export default Dashboard;
