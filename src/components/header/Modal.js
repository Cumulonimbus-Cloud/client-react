import Modal from 'react-modal';
import ModalContent from './ModalContent';
import './Modal.css';
import LogoutContent from './LogoutContent';
import EditModal from './EditModal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 1000
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        border: 'none',
        padding: '20px', 
        maxWidth: '90%',
        maxHeight: '90%',
        boxSizing: 'border-box'
    },
};

function DescriptionModal({ modalIsOpen, setIsOpen, modalContent, setAccessToken, setIsLogin, setHasGradCard }) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            id='description-modal'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal" >
            {modalContent === 'question' ? (
                <ModalContent closeModal={closeModal} />
            ) : (
                modalContent === 'logout' ? (
                    <LogoutContent
                        closeModal={closeModal}
                        setAccessToken={setAccessToken}
                        setIsLogin={setIsLogin}
                        setHasGradCard={setHasGradCard}
                    />
                ) : (<EditModal closeModal={closeModal} />)
            )}
        </Modal>
    );
}

export default DescriptionModal;