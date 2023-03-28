import { FaSignOutAlt } from 'react-icons/fa'
import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'
import Logo from '../Logo'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import {logout, reset} from '../../features/auth/authSlice'

type SidebarProps = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
    isMobile?: boolean
}

const Sidebar = (
    { 
        isDarkMode, 
        setIsDarkMode, 
        showSidebar, 
        setShowSidebar, 
        isMobile=false
    }:SidebarProps) => {
        const navigate = useNavigate()
        const dispatch = useDispatch<AppDispatch>()

        const handleLogout = () => {
            dispatch(logout())
            dispatch(reset())
            navigate('/')
        }

        const mobileClass = !isMobile ? "hidden sm:flex sm:flex-col lg:w-[300px] h-screen pt-8" 
                : "absolute flex flex-col sm:hidden top-20 left-1/2 translate-x-[-50%] z-10 bg-white rounded-lg pt-4  min-h-[70%] max-h-[80%]"

        return (
            <section className={`${!showSidebar && "sm:hidden"} ${mobileClass} transition-all w-[261px] justify-between border-r border-l-lines dark:bg-d-gray dark:border-d-lines overflow-scroll`}>
                <div>
                    <Logo isDarkMode={isDarkMode} showSidebar={showSidebar} />
                    <SelectBoard />
                </div>
                <div className={`${isMobile ? "mb-0" : "mb-11"}`}>
                    <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    { true && <div
                        className="py-3.5 pl-8 mr-6 text-m-gray font-bold cursor-pointer transition duration-300 rounded-r-3xl hover:text-main-purple hover:fill-main-purple hover:bg-main-purple hover:bg-opacity-10 dark:hover:bg-white"
                        onClick={() => setShowSidebar(prev => !prev)}
                    >
                        <img className="h-5 mr-4 inline cursor-pointer" src={`/assets/icon-hide-sidebar.svg`}
                            alt="hide sidebar" />
                        Hide Sidebar
                    </div>}
                    <a className="flex items-center mx-auto my-2 px-2 w-fit cursor-pointer transition duration-300 hover:text-main-purple hover:dark:text-white" onClick={handleLogout}>
                    <span className="pr-2">Logout</span><FaSignOutAlt/> 
                    </a>
                </div>
            </section>
        )
    }
    
    
export default Sidebar