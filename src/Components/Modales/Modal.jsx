/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';
import './modal.css'

export const Modal = ({ children, isOpen, closeModal, modalNumber }) => {
    if (!isOpen) {
        return null;
    }
    const handLeClick = (event) => {
        event.stopPropagation()
    }

    return ReactDOM.createPortal(
        <div className={`modal-${modalNumber} ${isOpen && `is-open`}`} onClick={closeModal}>
            <div className={`modal-container`} onClick={handLeClick}>
                <button className='modal-close-btn' onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="modal-close-icon" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                {modalNumber === "1" ? (
                    <>
                        <div className='modal-title-content'>
                            <p className='modal-text'>Complete el formulario para el registro.</p>
                        </div>
                        {children}
                    </>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}

export default Modal;


