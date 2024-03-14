import styles from './style.module.scss'

interface Props {
    title: string
    subtitle: string
}

export function ApplicationsHeader({ title, subtitle }: Props) {

    return (
        <div className={styles.applicationHeader}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}