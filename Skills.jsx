import React from "react";
import styles from "./Skills.module.css";
function Skills() {
  return (
    <div id="skills_section">
      <h1 className={styles.skills}>Skills</h1>
      <div className={styles.skillContainer}>
        <div className={styles.progressbar}>HTML 95%</div>
        <div className={styles.progressbarOne}>CSS 70%</div>
        <div className={styles.progressbarTwo}>JS 75%</div>
        <div className={styles.progressbarThree}>React 80%</div>
        <div className={styles.progressbarThree}>Tailwind 80%</div>
        <div className={styles.progressbarThree}>Dom 80%</div>
        
      </div>
      <div className={styles.toolsContainer}>
        <h1 className={styles.skills}>Tools</h1>
        <div className={styles.imagesTools}>

        {/* <img
          className={styles.toolsImages}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU"
          alt=""
        /> */}
        <img
          className={styles.toolsImages}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTJYQn37nEl5r7Z1MhX8Jaw6KUvJtkYc0Bw&usqp=CAU"
          alt=""
        />
        <img
          className={styles.toolsImages}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9B_bF_VSUFPnwBMDC0V76_5TXOF-nbwLCw&usqp=CAU"
          alt=""
          />
          <img  className={styles.toolsImages} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ17ngv2Hw9CvWxcyyP8Vx5QB8aYE2qRCh8A&usqp=CAU" alt="" />
          <img  className={styles.toolsImages} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG76MJVO2RdIT1j4Th1unZlXadKSQ0a-KDcFdXyCPpIgtNkrbBTQgeXbi7DrUF4uyKF8Y&usqp=CAU" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Skills;
