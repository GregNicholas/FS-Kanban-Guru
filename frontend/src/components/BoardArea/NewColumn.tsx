type NewColumnProps = {
  addColumn: () => void;
}

const NewColumn = ({ addColumn }:NewColumnProps) => {
  return (
    <div 
      onClick={addColumn}
      className="flex items-center justify-center cursor-pointer text-m-gray hover:text-main-purple bg-[#E9EFFA] dark:bg-d-gray w-70 rounded-lg mt-10 mb-7 mr-48"
    >
      <p className="font-bold text-2xl">+ New Column</p>
    </div>
  )
}

export default NewColumn