import Modal from 'react-modal'
import styles from './style.module.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30rem',
        height: '40rem',
        display: 'flex',
        background: '#30363d',
    },

}

Modal.setAppElement('#root')

interface Props {
    title: string
    description: string
    link: string
    modalIsOpen: boolean
    closeModal: () => void
}

export function ApplicationsModal({ title, description, link, modalIsOpen, closeModal }: Props) {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName={styles.overlayBackground}
        >
            <div className={styles.containerModal}>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>
                    <a target="_blank" href={link} rel="noreferrer">
                        Visitar aplicação
                    </a>
                </button>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </Modal>
    )
}