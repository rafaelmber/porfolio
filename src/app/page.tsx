import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import ProductCard from '@/components/ProjectCard';
import Wrapper from '@/components/Layout/Wrapper';

import profilePic from '@/public/images/profile.jpg';

export default function Home() {
  return (
    <Wrapper>
      <section className={styles.hero_section}>
        <h1>Welcome to My Portfolio</h1>
        <p>I&apos;m Rafael Martinez, an Electronics Engineer and Programmer</p>
        <a href='#projects'>Explore My Work</a>
      </section>
      <section id='about' className={styles.section_card}>
        <h2>About Me</h2>
        <div className={styles.about}>
          <div className={styles.image_container}>
            <Image className={styles.profile_picture} src={profilePic} width={240} height={300} alt='Picture' />
          </div>
          <div className={styles.content}>
            <p>
              I&apos;m <strong>Rafael Martinez</strong>, an Electronics Engineer and Developer passionate about
              solving real-world problems through technology. I specialize in electronics, microcontroller
              programming, and software development, with experience in frontend development and integrating
              hardware with code.
            </p>
            <p>
              My goal is to create impactful solutions that merge hardware and software, while continuously growing
              as a developer and engineer. Whether it&apos;s a new app or a microcontroller-based project, I love
              pushing the boundaries of innovation.
            </p>
            <button className={styles.primary_button}>Contact Me</button>
          </div>
        </div>
      </section>
      <section className={styles.section_card}>
        <h2>Skills</h2>
        <div className={styles.skills_container}>
          <h3>Technologies & Expertise</h3>
          <ul className={styles.skills_list}>
            <li>React</li>
            <li>Python</li>
            <li>Micro-controller Programming</li>
            <li>Data Science</li>
            <li>Frontend Development</li>
            <li>Electronics</li>
          </ul>
        </div>
      </section>
      <section id='projects' className={styles.section_card}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Link href='/projects' className={styles.primary_button}>
          More Projects
        </Link>
      </section>
    </Wrapper>
  );
}
