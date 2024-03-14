import { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
    children: ReactNode
    img: string
    alt: string
}
export function ApplicationsRoot({ children, img, alt }: Props) {

    return (
        <div id="descriptionResponsive" className={styles.container}>
            {children}
            <img src={img} alt={alt} />
        </div>
    )
}
