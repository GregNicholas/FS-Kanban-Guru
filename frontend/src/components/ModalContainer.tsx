import React from 'react'

type Props = {
    children: React.ReactNode;
    closeModal?: React.Dispatch<React.SetStateAction<boolean>>;
  };

const ModalContainer = ({ children, closeModal }:Props) => {
  const close = () => {
    if(closeModal){
      closeModal(false)
    }
  }

  return (
    <div className="absolute top-0 left-0 p-4 h-fit min-h-full w-full text-xs text-m-gray bg-filter flex items-center justify-center"
         onClick={close}
    >
        {children}
    </div>
  )
}

export default ModalContainer