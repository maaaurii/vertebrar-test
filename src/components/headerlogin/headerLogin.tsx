import Link from 'next/link';
import Image from 'next/image';
import styles from './headerLogin.module.css'; // Importa el CSS si lo necesitas

export const HeaderLogin = () => {
  return (
    <header className={styles.header}>
      <img src="/Digpatho_logo.646869665112.png" alt="Digpatho logo" className={styles.logo} />
      <nav className={styles.nav}>
        <Link href="/login/cancerDeMama" className={styles.navlink}>
        Cáncer de Mama
        </Link>
        <Link href="/login/cancerDeProstata" className={styles.navlink}>
        Cáncer de Prostata
        </Link>
      </nav>
      <nav className={styles.nav}>
        <Link href="/login/inicio" className={styles.navlink}>
          Home
        </Link>
        <Link href="/" className={styles.navlink}>
        Logout
        </Link>
      </nav>
    </header>
  );
};
