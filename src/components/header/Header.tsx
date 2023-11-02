"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import EczodexLogo from "../../../public/main-logo.svg";
import eczodexIconWhite from "../../../public/Images/VectorSecondary.svg";
import homeIcon from "../../../public/Icons/home-icon.svg";
import homeIconWhite from "../../../public/Icons/home-icon-white.svg";
import syncIcon from "../../../public/Icons/sync-arrow.svg";
import syncIconWhite from "../../../public/Icons/sync-arrow-white.svg";
import profileIcon from "../../../public/Icons/profile-icon.svg";
import profileIconWhite from "../../../public/Icons/profile-icon-white.svg";
import pieChartIcon from "../../../public/Icons/pie-chart-icon.svg";
import pieChartIconWhite from "../../../public/Icons/pie-chart-white.svg";
import rightArrowIcon from "../../../public/Icons/right-arrow.svg";
import signOutIcon from "../../../public/Icons/sign-out-icon.svg";
import ethIcon from "../../../public/Icons/eth-icon.svg";
import hamburgerIcon from "../../../public/Icons/hamburger.svg";
import SidebarDrawer from "../sidebar/SidebarDrawer";

const styles = {
  header: `w-full h-[3.8rem] p-[1rem] flex items-center justify-between bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover xl:hidden z-30 sticky top-0`,
  sideBarheader: `w-full h-[3.8rem] p-[1rem] flex items-center justify-between md:bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover xl:hidden z-30 `,
  logo: `flex`,
  hamburger: `flex`,
  navIcon: `w-[3rem] h-[3rem] rounded-md flex justify-center items-center`,
  navIconActive: `w-[3rem] h-[3rem] rounded-md bg-white flex justify-center items-center bg-opacity-20`,
  sidebarDrawer: `w-fit h-screen fixed z-20 max-md:w-full w-fit overflow-auto`,
};

const Header = () => {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    if (pathname === "/") {
      setCurrentRoute("home");
    } else if (pathname === "/assets/mint/eczodex") {
      setCurrentRoute("mint");
    } else if (pathname === "/assets/redeem/eczodex") {
      setCurrentRoute("redeem");
    } else if (pathname === "/assets/adjust-debt/eczodex") {
      setCurrentRoute("adjust-debt");
    } else if (pathname === "/assets/open-debt/eczodex") {
      setCurrentRoute("open-debt");
    } else if (pathname === "/assets/transactions") {
      setCurrentRoute("transactions");
    } else if (pathname === "/admin/analytics") {
      setCurrentRoute("analytics");
    } else if (pathname === "/admin/user-account/connected-wallets") {
      setCurrentRoute("connected-wallets");
    } else if (pathname === "/admin/user-account/change-password") {
      setCurrentRoute("change-password");
    }
  }, [pathname]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? styles.sideBarheader : styles.header}>
        <div
          className={isOpen ? styles.navIconActive : styles.navIcon}
          onClick={toggleNavbar}
        >
          <Image src={hamburgerIcon} alt="hamburgerIcon" width={20} />
        </div>
        <Link href="/" className={styles.logo}>
          <Image src={EczodexLogo} alt="eczodex-logo" />
        </Link>

        {currentRoute === "home" && (
          <Link href="/" className={styles.navIcon}>
            <Image src={homeIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "mint" && (
          <Link href="/assets/mint/eczodex" className={styles.navIcon}>
            <Image src={eczodexIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "redeem" && (
          <Link href="/assets/redeem/eczodex" className={styles.navIcon}>
            <Image src={eczodexIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "adjust-debt" && (
          <Link href="/assets/adjust-debt/eczodex" className={styles.navIcon}>
            <Image src={eczodexIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "open-debt" && (
          <Link href="/assets/open-debt/eczodex" className={styles.navIcon}>
            <Image src={eczodexIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "transactions" && (
          <Link href="/assets/transactions" className={styles.navIcon}>
            <Image src={syncIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "analytics" && (
          <Link href="/analytics" className={styles.navIcon}>
            <Image src={pieChartIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "connected-wallets" && (
          <Link href="/admin/user-account/connected-wallets" className={styles.navIcon}>
            <Image src={profileIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
        {currentRoute === "change-password" && (
          <Link href="/admin/user-account/change-password" className={styles.navIcon}>
            <Image src={profileIconWhite} alt="syncIconWhite" width={20}/>
          </Link>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -368, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -368, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.sidebarDrawer}
          >
            <SidebarDrawer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
