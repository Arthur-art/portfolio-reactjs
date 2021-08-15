import React, { useState } from "react";
import styles from "./style.module.scss"
import Modal from 'react-modal';

interface Props {
    title: string;
    subTitle: string;
    link: string;
    img: string;
    alt: string;
    titleLink: string;
    description: string;
    titleModal: string;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "30rem",
        height: "40rem",
        display: "flex",
        background: "#30363d"

    },
};

Modal.setAppElement('#root');

export function Applications({ title, subTitle, link, img, alt, titleLink, description, titleModal }: Props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={styles.containerModal}>
                    <h1>{titleModal}</h1>

                    <h2>Descrição:</h2>
                    <p>{description}</p>
                    <button><a target="_blank" href={link}>Visitar aplicação</a></button>
                    <button onClick={closeModal}>Fechar</button>

                </div>
            </Modal>
            <h1>{title}</h1>
            <h2>{subTitle}</h2><br/><br/>
            <div className={styles.subtitle}>
                <a onClick={openModal}>Saiba mais {">"} </a>
                <a target="_blank" href={link}>{titleLink}{" >"}</a>
            </div>
            <img src={img} alt={alt} />

        </div>
    )
}