import React from "react";
import styles from "./Card.module.css";
import { CiShare1 } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
function Card({
  image,
  FirstDesc,
  SecondDesc,
  ThirdDesc,
  TechStack,
  github,
  netlify,
  projectName
}) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.imageOfProject} src={image} alt="" />
        </div>
        <div className={styles.listOfproject}>
          <p>{projectName}</p>
          <ul>
            <li>{FirstDesc}</li>
            <li>{SecondDesc}</li>
            <li>{ThirdDesc}</li>
          </ul>
          <div>
            <p>{TechStack} </p>
          </div>
          <div className={styles.buttonComponents}>
            <a target="_blank" href={github}>
              <button className={styles.sourceCodeBtn}>
                Source Code <FaGithubSquare />
              </button>
            </a>
            <a target="_blank" href={netlify}>
              <button className={styles.liveBtn}>
                Live <CiShare1 />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
