import React from "react";
import styles from "./About.module.css";
import about from  "../../assets/system1.png"

function About() {
  return (
    <>
      <div id="about_section">
        <h1 className={styles.aboutHeading}>
           <span className={styles.aboutMeHeading}> About Me</span>
        </h1>
        <p className={styles.nameOfAdmin}>I'm Krishna Bagavan</p>
        <div className={styles.paraTag}>
          <p className={styles.briefSummmmaryAboutMe}>
           I completed my Master of Computer Applications in 2023 in Osmania University with 80% present doing course In Masai as a Full Stack Developer.i immerse myself in the craft of digital design, ensuring every element is precise and every interaction seamless. With a dedication to excellence, I blend creativity with functionality, crafting user interfaces that go beyond visuals to deliver engaging, responsive experiences. Driven by a passion for innovation, I shape digital environments that not only captivate but also enhance the user's journey, leaving a lasting impact.
          </p>
          <img className={styles.systemImage}  src={about} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
