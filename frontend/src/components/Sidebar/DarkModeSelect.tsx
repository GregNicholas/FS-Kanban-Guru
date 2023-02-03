import React from 'react'
import Toggle from './Toggle'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSelect = ({ isDarkMode, setIsDarkMode }:DarkMode) => {

  return (
    <div className="flex justify-center gap-6 mx-4 lg:mx-6 items-center w-auto h-12 mb-4 rounded-md bg-l-gray dark:bg-v-dark-gray">
        <img className="h-5 inline dark:cursor-pointer" src={`/assets/icon-light-theme.svg`} 
             onClick={() => setIsDarkMode(false)}
             alt="light toggle" 
        />
        <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <img className="h-5 inline cursor-pointer dark:cursor-default" src={`/assets/icon-dark-theme.svg`} 
             onClick={() => setIsDarkMode(true)}
             alt="dark toggle" 
        />
    </div>
  )
}

export default DarkModeSelect