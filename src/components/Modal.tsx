const Modal = ({ isModalOpen, setIsModalOpen, message }: {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    message: String
}) => {
    const outsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            setIsModalOpen(false);
        }
    }
    return (
        isModalOpen &&
        <div id="myModal" onClick={outsideClick} className="fixed inset-0 z-10 w-full h-full overflow-auto bg-black bg-opacity-40">
            <div className="bg-white flex flex-col mt-[20%] mx-auto p-5 border border-gray-400 w-2/5">
                <p className="w-full">{message}</p>
                <button onClick={() => setIsModalOpen(false)} className="text-white p-2 mt-6 bg-gray-800 text-2xl font-bold hover:text-green- focus:text-gray-200 focus:outline-none cursor-pointer">Okay</button>
            </div>
            
        </div>
    )
}

export default Modal