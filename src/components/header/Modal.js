import Modal from 'react-modal';
import ModalContent from './ModalContent';
import './Modal.css';

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
        border: 'none'
    },
};

function DescriptionModal({ modalIsOpen, setIsOpen }) {
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
            <ModalContent closeModal={closeModal} />
        </Modal>
    );
}

export default DescriptionModal;