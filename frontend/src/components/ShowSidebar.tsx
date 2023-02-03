import React from 'react'

type ShowSidebarProps = {
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowSidebar = ({ setShowSidebar }:ShowSidebarProps) => {
  return (
    <div 
        onClick={() => setShowSidebar(true)}
        className="hidden sm:flex absolute cursor-pointer w-14 h-12 items-center justify-center bg-main-purple rounded-r-3xl left-0 bottom-8"
    >
        <img 
            className="w-4" 
            src={`/assets/icon-show-sidebar.svg`} 
            alt="hide sidebar" 
        />    
    </div>
  )
}

export default ShowSidebar