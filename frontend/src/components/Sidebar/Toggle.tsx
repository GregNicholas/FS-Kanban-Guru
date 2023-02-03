import React from 'react'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ( {isDarkMode, setIsDarkMode}:DarkMode) => {
  const darkClass = 'transform translate-x-4';

  return (
    <div className="inline-flex p-x-12 w-10 h-5  items-center bg-main-purple rounded-full p-1 cursor-pointer"
            onClick={() => setIsDarkMode(prev => !prev)}
        >
            <div className =  
                {`bg-white h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? darkClass : null}`} 
            >
            </div>
        </div>
  )
}

Toggle.propTypes = {}

export default Toggle