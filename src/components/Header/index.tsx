import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Rafael Martinez</h1>
      <nav>
        <span>My Projects</span>
        <span>About me</span>
        <span>Contact me</span>
      </nav>
    </header>
  );
}
