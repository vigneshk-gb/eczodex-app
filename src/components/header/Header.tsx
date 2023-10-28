"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import EczodexLogo from "../../../public/main-logo.svg";
import syncIconWhite from "../../../public/Icons/sync-arrow-white.svg";
import hamburgerIcon from "../../../public/Icons/hamburger.svg";
import Link from "next/link";
import SidebarDrawer from "../sidebar/SidebarDrawer";

const styles = {
  header: `w-full h-[3.8rem] p-[1rem] flex items-center justify-between bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover xl:hidden z-30 sticky top-0`,
  sideBarheader: `w-full h-[3.8rem] p-[1rem] flex items-center justify-between md:bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover xl:hidden z-30 `,
  logo: `flex`,
  hamburger: `flex`,
  navIcon: `w-[3rem] h-[3rem] rounded-md flex justify-center items-center`,
  navIconActive: `w-[3rem] h-[3rem] rounded-md bg-white flex justify-center items-center bg-opacity-20`,
  sidebarDrawer: `fixed z-20 max-md:w-full w-fit h-screen`,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? styles.sideBarheader: styles.header}>
        <div
          className={isOpen ? styles.navIconActive : styles.navIcon}
          onClick={toggleNavbar}
        >
          <Image src={hamburgerIcon} alt="hamburgerIcon" width={20} />
        </div>
        <Link href="/" className={styles.logo}>
          <Image src={EczodexLogo} alt="eczodex-logo" />
        </Link>
        <Link href="/transaction" className={styles.navIcon}>
          <Image src={syncIconWhite} alt="syncIconWhite" width={20} />
        </Link>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.div
            initial={{ x:-368, opacity: 0 }}
            animate={{  x: 0, opacity: 1 }}
            exit={{  x:-368, opacity: 0 }}
            transition={{duration:0.3}}
            className={styles.sidebarDrawer}
          >
            <SidebarDrawer/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
