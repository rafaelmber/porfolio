import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Rafael Martinez</h1>
      <nav>
        <span>
          <a href='#projects'>My Projects</a>
        </span>
        <span>
          <a href='#about'>About me</a>
        </span>
        <span>Contact me</span>
      </nav>
    </header>
  );
}
