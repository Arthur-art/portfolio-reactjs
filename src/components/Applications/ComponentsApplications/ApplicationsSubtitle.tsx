import styles from './style.module.scss'

interface Props {
    openModal: () => void
    link: string
}

export function ApplicationsSubtitle({ openModal, link }: Props) {

    return (
        <div className={styles.subtitle}>
            <a onClick={openModal}>Saiba mais {'>'} </a>
            <a target="_blank" href={link} rel="noreferrer">
                Visitar Aplicação{' >'}
            </a>
        </div>
    )
}