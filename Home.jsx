import React from "react";
import styles from "./Home.module.css";
import myResume from "../../assets/M.KrishnaBagavan-FullStackWebDeveloper-dayd.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AvatarImg from "../../components/card/AvatarImg";
function Home() {
  return (
    <>
      <div id="home_section" className={styles.containerOfHomeSection}>
        <div className={styles.imageContainer}>
          <AvatarImg />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.headingName}>
            <span className={styles.nameOfAdmin}>M.Krishna Bagavan</span>
            <br />
            FULL-STACK DEVELOPER
          </h1>
          <p className={styles.quote}>
          Passionate frontend developer focused on creating intuitive, responsive, and user-centric web applications.
          </p>
          <button className={styles.resumeButton}>
            <a
              className={styles.resumeAnchor}
              href={myResume}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/15mWeer6eV29zYnP6unDnlsulb0Rwq03Q/view?usp=sharing"
                );
              }}
              target="_blank"
              download
            >
              Resume
            </a>
          </button>
          <div className={styles.accountOfSocialMedia}>
            <a href="https://github.com/krishnabagavan" target="_blank">
              <button className={styles.socialMediaIcon}>
                <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-bagavan-270330258/"
              target="_blank"
            >
              <button className={styles.socialMediaIcon}>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
