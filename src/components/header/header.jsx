import Link from 'next/link';
import styles from './header.module.css'; 

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/Digpatho_logo.646869665112.png" alt="Digpatho logo" className={styles.logo} />
      <nav className={styles.nav}>
        <Link href="/" className={styles.navlink}>
          Home
        </Link>
        <Link href="/formulario" className={styles.navlink}>
          Login
        </Link>
      </nav>
    </header>
  );
};




