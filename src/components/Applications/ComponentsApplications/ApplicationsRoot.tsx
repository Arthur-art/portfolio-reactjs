import { ReactNode, useState } from 'react'
import styles from './style.module.scss'
import { Applications } from '..'

interface Props {
    children: ReactNode
    img: string
    alt: string
    description: string
    link: string
    title: string
}
export function ApplicationsRoot({ children, img, alt, description, link, title }: Props) {

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div id="descriptionResponsive" className={styles.container}>
            <Applications.Modal description={description} link={link} title={title} modalIsOpen={modalIsOpen} closeModal={closeModal} />
            {children}
            <Applications.Subtitle link={link} openModal={openModal} />
            <img src={img} alt={alt} />
        </div>
    )
}
