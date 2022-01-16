import './styles.scss';
import close from '../../img/close.svg'

const Modal = ({children, isOpen, closeModal}) => {

    const handleModalWindow = (e) => {
        e.stopPropagation();
    }

    return (
        <>
        {isOpen && (
            <div className="modalBackground" onClick={() => closeModal()}>
                <div className="modalWindow" onClick={handleModalWindow}>
                    <div className="closeButtonCont">
                        <div className="closeButton" >
                            <img 
                                alt="close"
                                src={close} 
                                onClick={() => closeModal()}
                            />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        )}
        </>
    )
}

export default Modal;