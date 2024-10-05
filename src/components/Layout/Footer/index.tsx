import Link from 'next/link';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* <!-- About Column --> */}
        <div className={styles.footer__column}>
          <h3>About Me</h3>
          <p>
            I&apos;m Rafael Martinez, an Electronics Engineer and Programmer passionate about technology and
            innovation.
          </p>
        </div>

        {/* <!-- Links Column --> */}
        <div className={styles.footer__column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href='/#about'>About</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/#about'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* <!-- Social Media Column --> */}
        <div className={styles.footer__column}>
          <h3>Follow Me</h3>
          <div className={styles.social__icons}>
            <a href='https://github.com/rafaelmber' target='_blank'>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/rafaelmber' target='_blank'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>&copy; 2024 Rafael Martinez. All rights reserved.</p>
      </div>
    </footer>
  );
}
