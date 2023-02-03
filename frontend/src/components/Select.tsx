import React from 'react'

type SelectProps = {
    currentStatus: string;
    handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    columns: string[];
}

const Select = ({ currentStatus, handleStatusChange, columns}:SelectProps) => {
  return (
    <select 
        className="w-full px-4 rounded h-10 text-[13px] font-medium text-black dark:text-white bg-white dark:bg-d-gray border border-l-lines dark:border-m-gray"
        value={currentStatus}
        onChange={handleStatusChange}
    >
        {columns.map(status => {
        return <option 
                    key={status}
                    className="text-[13px] font-medium" value={status}
                >
                    {status}
                </option>
        })}
    </select>
  )
}

export default Select