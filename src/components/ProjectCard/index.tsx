import Image from 'next/image';
import styles from './styles.module.css';

import codePic from '@/public/images/coding.jpg';

export default function ProductCard() {
  return (
    <div className={styles.project_card}>
      <Image src={codePic} width={300} height={200} alt='Project 1' />
      <div className={styles.project_card__content}>
        <h3 className={styles.project_card__title}>Coding project</h3>
        <p className={styles.project_card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, et, aut ipsam a, itaque ab aliquid
          odio harum blanditiis ea modi voluptatibus! Voluptatum ea, quae adipisci ab odit deleniti aliquam.
        </p>
        <a className={styles.project_card__button}>View Project</a>
      </div>
    </div>
  );
}
