import React from 'react'

type LogoProps = {
    isDarkMode: boolean;
    showSidebar: boolean;
}

const Logo = ({ isDarkMode, showSidebar }:LogoProps) => {
  const logoSource = `/assets/${isDarkMode ? "logo-light.svg" : "logo-dark.svg"}`
  const logoClasses = showSidebar ? "pl-8 sm:inline" : "absolute left-6 top-9 md:inline"
  return (
      <>
        <img className={`hidden h-6 mb-14 ${logoClasses}`} src={logoSource} alt="kanban boards" />
      </>
  )
}

export default Logo