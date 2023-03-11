import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import BoardArea from '../components/BoardArea/BoardArea'
import ShowSidebar from '../components/ShowSidebar'
import { AppDispatch, RootState } from "../app/store"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBoards, reset } from '../features/boards/boardSlice'
import BoardForm from '../components/Forms/BoardForm'
import Loader from '../components/Loader'

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

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
      dispatch(getBoards()) 
    }

    return () => {
      dispatch(reset())
    }
  }, [user, dispatch])
 
  return (
    <div className={`flex h-fit ${isDarkMode && "dark"}`}>
      {isLoading && <Loader />}
      <Sidebar 
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
          showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
      />
      <div className="flex flex-col flex-1 overflow-auto h-screen" tabIndex={0}>
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
