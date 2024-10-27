import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHome, FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import resume from "../../assets/M.KrishnaBagavan-FullStackWebDeveloper-dayd.pdf";
import { RiBookReadLine } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (menuOpen && isMobileView) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [menuOpen, isMobileView]);

  const handleMenuBtn = () => {
    setMenuOpen(true);
  };

  const handleCross = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={styles.mainOfNavbar}>
        <div>
          <a href="#home_section">
            <span className={styles.adminName}>Krishna Bagavan</span>
          </a>
        </div>
        {isMobileView && (
          <div
            className={menuOpen ? styles.backdrop : styles.hiddenBackdrop}
            onClick={handleCross}
          ></div>
        )}
        {isMobileView ? (
          <>
            {menuOpen ? (
              <div className={styles.listOfSectionAfterClick}>
                <a
                  className={styles.listSectionNavbar}
                  href="#home_section"
                  onClick={handleLinkClick}
                >
                  Home 
                  <FaHome />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#about_section"
                  onClick={handleLinkClick}
                >
                  About 
                  <FaUser />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#skills_section"
                  onClick={handleLinkClick}
                >
                  Skills <GiSkills />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#project_section"
                  onClick={handleLinkClick}
                >
                  Project <GoProjectSymlink />
                </a>
                {/* <a
                  className={styles.listSectionNavbar}
                  href="#ex_section"
                  onClick={handleLinkClick}
                >
                  Experience <GrUserExpert />
                </a> */}
                <a
                  className={styles.listSectionNavbar}
                  href="#contact_section"
                  onClick={handleLinkClick}
                >
                  Contact <IoMdContact />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  target="_blank"
                  href={resume}
                  onClick={() => {
                    window.open(
                      "");
                    handleLinkClick();
                  }}
                  
                  download
                >
                  Resume <RiBookReadLine />
                </a>
              </div>
            ) : (
              <div className={styles.hamburgerMenuICon}>
                <GiHamburgerMenu onClick={handleMenuBtn} />
              </div>
            )}
            {menuOpen && (
              <div className={styles.crossIcon}>
                <ImCross onClick={handleCross} />
              </div>
            )}
          </>
        ) : (
          <div className={styles.listOfSection}>
            <a
              className={styles.listSectionNavbar}
              href="#home_section"
              onClick={handleLinkClick}
            >
              Home <FaHome />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#about_section"
              onClick={handleLinkClick}
            >
              About <FaUser />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#skills_section"
              onClick={handleLinkClick}
            >
              Skills <GiSkills />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#project_section"
              onClick={handleLinkClick}
            >
              Project <GoProjectSymlink />
            </a>
           
            <a
              className={styles.listSectionNavbar}
              href="#contact_section"
              onClick={handleLinkClick}
            >
              Contact <IoMdContact />
            </a>
            <a
              className={styles.listSectionNavbar}
              href={resume}
              target="_blank"
              onClick={() => {
                window.open(
                  ""               );
                handleLinkClick();
              }}
          
              download="Krishna-Bagavan-Resume"
            >
              Resume <RiBookReadLine />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
