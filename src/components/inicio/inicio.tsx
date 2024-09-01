import styles from './inicio.module.css'

export const Inicio = () => {
    return (
    <main className={styles.main}>
        <div className={styles.div}>
            <h2 className={styles.h2}>Detección temprana de cáncer con IA</h2>
            <h4 className={styles.h4}>Nuestra tecnología permite que la detección de cáncer sea más rápida y precisa. El futuro de la patología es ahora. El futuro es DigPatho</h4>
            <a className={styles.a} href="https://www.digpatho.com/es" target="_blank">Conoce</a>
        </div>
    </main>
    );
}