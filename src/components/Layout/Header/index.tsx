import Link from 'next/link';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href='/'>Rafael Martinez</Link>
      </h1>
      <nav>
        <span>
          <Link href='/#projects'>My Projects</Link>
        </span>
        <span>
          <Link href='/#about'>About me</Link>
        </span>
        <span>Contact me</span>
      </nav>
    </header>
  );
}
