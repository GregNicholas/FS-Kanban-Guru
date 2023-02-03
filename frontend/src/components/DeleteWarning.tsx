import ModalContainer from './ModalContainer'
import Button from './Button'

type DeleteWarningProps = {
  closeModal: (value: React.SetStateAction<boolean>) => void
  handleDelete: () => void
  title: string
  message: string
}

const DeleteWarning = ({ closeModal, handleDelete, title, message }: DeleteWarningProps) => {
  const confirmDeleteStyle = "bg-red hover:bg-red-hover text-white w-100% md:w-[200px]"
  const cancelDeleteStyle = "bg-[#e6e6ff] hover:bg-white border dark:bg-white text-main-purple w-100% md:w-[200px]"

  return (
    <ModalContainer>
        <div className="w-120 max-w-[95%] p-8 text-[13px] font-normal bg-white dark:bg-v-dark-gray rounded-lg cursor-default">
        <h3 className="text-red text-lg font-bold mb-6">{title}</h3>
        <p className="mb-6">
          {message}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            text="Delete" 
            customStyle={confirmDeleteStyle} 
            onClick={() => {
              handleDelete() 
              closeModal(true)
            }} 
          />
          <Button text="Cancel" customStyle={cancelDeleteStyle} onClick={closeModal} />
        </div>
        
    </div>
    </ModalContainer>
  )
}

export default DeleteWarning