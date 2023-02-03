type EditModalProps = {
    editText: string;
    deleteText: string;
    handleEdit: React.Dispatch<React.SetStateAction<boolean>>;
    handleDelete: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const EditModal = ({ editText, deleteText, handleEdit, handleDelete }:EditModalProps) => {
  const position = editText === "Edit Task" ? "top-8 right-[-6rem]" : "top-20 right-6"
  return (
    <div className={`${position} flex flex-col justify-between w-48 h-24 p-4 absolute text-[13px]  bg-white dark:bg-v-dark-gray rounded-lg`}>
        <p 
          className="text-m-gray cursor-pointer leading-6"
          onClick={() => handleEdit(true)}
        >
          {editText}
        </p>
        <p 
          className="text-red cursor-pointer leading-6"
          onClick={handleDelete}
        >
          {deleteText}
        </p>
    </div>
  )
}

export default EditModal