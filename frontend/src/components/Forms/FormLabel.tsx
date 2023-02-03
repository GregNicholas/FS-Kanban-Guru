import React from 'react'

type Props = {
    children: React.ReactNode;
  };

const FormLabel = ({ children }:Props) => {
  return (
    <label className="flex flex-col gap-1 text-xs mb-2 leading-6 font-bold">
        {children}
    </label>
  )
}

export default FormLabel