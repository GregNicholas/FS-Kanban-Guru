type NewColumnProps = {
  onClick: () => void;
}

const NewColumn = ({ onClick }:NewColumnProps) => {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer text-m-gray hover:text-main-purple bg-[#E9EFFA] dark:bg-d-gray w-70 rounded-lg mt-10 mb-7 mr-48"
    >
      <p className="font-bold text-2xl">+ New Column</p>
    </div>
  )
}

export default NewColumn