import { Header } from '@/components'
import styles from './formulario.module.css'

export default function FormularioLayout ({children}) {
    return (
        <>
        <Header />
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}