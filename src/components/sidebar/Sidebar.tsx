"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EczodexLogo from "../../../public/main-logo.svg";
import homeIcon from "../../../public/Icons/home-icon.svg";
import syncIcon from "../../../public/Icons/sync-arrow.svg";
import profileIcon from "../../../public/Icons/profile-icon.svg";
import pieChartIcon from "../../../public/Icons/pie-chart.svg";
import rightArrowIcon from "../../../public/Icons/right-arrow.svg";
import signOutIcon from "../../../public/Icons/sign-out-icon.svg";
import ethIcon from "../../../public/Icons/eth-icon.svg";

const styles = {
  sidebar: `w-[22.43rem] h-screen rounded-r-[1rem] bg-[url('../../public/Images/SidebarBg.png')] bg-cover bg-center flex flex-col fixed`,
  logo: `w-[9.37rem] h-[2.38rem] mt-[4rem] mx-auto`,
  navContainer: `w-full h-fit mt-[3.82rem] flex flex-col gap-[2.19rem]`,
  navItem: `flex`,
  navIcon: `w-[3rem] h-[3rem] ml-[1.75rem] rounded-md bg-white flex justify-center items-center`,
  navIconSecondary: `w-[3rem] h-[3rem] ml-[1.75rem] rounded-md bg-white flex justify-center items-center bg-opacity-10`,
  navText: `text-[#FFFFFF] ml-[1.38rem] self-center font-semibold text-sm`,
  subNavContainer: `w-full h-fit flex flex-col mt-[2rem] gap-y-[0.5rem] `,
  subNavIconContainer: `w-fit pt-[0.5rem] flex flex-col justify-center items-center gap-[0.5rem]`,
  subNavTitle: `text-[#FFFFFF] text-[0.75rem] tracking-[0.11rem] font-normal uppercase mt-[2.19rem] ml-[2.25rem] mb-[0.1rem]`,
  subNavItem: `w-fit ml-[3rem] flex gap-[2.62rem] items-start`,
  subNavVerticalLine: `w-[1px] h-[2rem] bg-[#ffff]`,
  subNavItemMenuCircleActive: `w-[0.5rem] h-[0.5rem]  bg-[#fff] rounded-md`,
  subNavItemMenuCircle: `w-[0.5rem] h-[0.5rem] border border-[#fff] rounded-md`,
  subNavItemTxt: `text-base font-normal text-[#fff]`,
  subNavItemActiveTxt: `text-base font-semibold text-[#fff]`,
  adminHeading: `text-[#FFFFFF] text-[0.75rem] tracking-[0.11rem] font-normal uppercase mt-auto ml-[2.25rem] mb-[1.31rem]`,
  adminContainer: `w-full h-fit flex flex-col gap-[2.19rem]`,
  adminItem: `flex`,
  adminIcon: `w-[3rem] h-[3rem] ml-[2.06rem] rounded-md bg-white flex justify-center items-center bg-opacity-10`,
  adminText: `text-[#FFFFFF] ml-[1.38rem] self-center font-semibold text-sm`,
  arrowIcon: `ml-auto mr-[2.43rem] w-[0.32rem] h-[0.75rem] self-center`,
  walletContainer: `w-full h-[6.31rem] bg-[#2B8AC8] rounded-r-[1rem] mt-auto flex items-center`,
  walletIcon: `w-[3.68rem] h-[3.68rem] ml-[1.31rem]`,
  signOutContainer: `flex gap-[0.75rem] ml-auto mr-[1.81rem] items-center`,
  signOutText: `text-sm font-semibold text-[#ffff]`,
  signOutIcon: `w-[1.5rem] h-[1.5rem]`,
};

const Sidebar = () => {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentRoute("home");
    } else if (location.pathname === "/assets/mint/eczodex") {
      setCurrentRoute("mint");
    } else if (location.pathname === "/assets/redeem/eczodex") {
      setCurrentRoute("redeem");
    } else if (location.pathname === "/assets/adjust-debt/eczodex") {
      setCurrentRoute("adjust-debt");
    } else if (location.pathname === "/assets/open-debt/eczodex") {
      setCurrentRoute("open-debt");
    }
  }, [pathname]);

  useEffect(() => {
    console.count(`${pathname}, 👀`);
  }, [pathname]);

  return (
    <div className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        <Image src={EczodexLogo} alt="eczodex-logo" />
      </Link>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <div className={styles.navIcon}>
            <Image src={homeIcon} alt="home-icon" width={16} />
          </div>
          <div className={styles.navText}>Home</div>
        </div>
        <div className={styles.navItem}>
          <div className={styles.navIconSecondary}>
            <Image src={syncIcon} alt="sync-icon" width={16} />
          </div>
          <div className={styles.navText}>Transactions</div>
        </div>
      </div>
      {currentRoute !== "home" && (
        <>
          <div className={styles.subNavTitle}>ECZODEX STABLECOIN</div>
          <div className={styles.subNavContainer}>
            <div className={styles.subNavItem}>
              <div className={styles.subNavIconContainer}>
                <div className={currentRoute === "mint" ? styles.subNavItemMenuCircleActive : styles.subNavItemMenuCircle}></div>
                <div className={styles.subNavVerticalLine}></div>
              </div>
              <Link href="/assets/mint/eczodex" className={currentRoute === "mint" ? styles.subNavItemActiveTxt : styles.subNavItemTxt}>Mint</Link>
            </div>
            <div className={styles.subNavItem}>
              <div className={styles.subNavIconContainer}>
              <div className={currentRoute === "open-debt" ? styles.subNavItemMenuCircleActive : styles.subNavItemMenuCircle}></div>
                <div className={styles.subNavVerticalLine}></div>
              </div>
              <Link href="/assets/open-debt/eczodex" className={currentRoute === "open-debt" ? styles.subNavItemActiveTxt : styles.subNavItemTxt}>Open Debt Positions</Link>
            </div>
            <div className={styles.subNavItem}>
              <div className={styles.subNavIconContainer}>
              <div className={currentRoute === "adjust-debt" ? styles.subNavItemMenuCircleActive : styles.subNavItemMenuCircle}></div>
                <div className={styles.subNavVerticalLine}></div>
              </div>
              <Link href="/assets/adjust-debt/eczodex" className={currentRoute === "adjust-debt" ? styles.subNavItemActiveTxt : styles.subNavItemTxt}>Adjust Debt Positions</Link>
            </div>
            <div className={styles.subNavItem}>
              <div className={styles.subNavIconContainer}>
              <div className={currentRoute === "redeem" ? styles.subNavItemMenuCircleActive : styles.subNavItemMenuCircle}></div>
              </div>
              <Link href="/assets/redeem/eczodex" className={currentRoute === "redeem" ? styles.subNavItemActiveTxt : styles.subNavItemTxt}>Redeem</Link>
            </div>
          </div>
        </>
      )}
      <div className={styles.adminHeading}>Admin</div>
      <div className={styles.adminContainer}>
        <div className={styles.adminItem}>
          <div className={styles.adminIcon}>
            <Image src={profileIcon} alt="profile-icon" width={16} />
          </div>
          <div className={styles.adminText}>User Account</div>
          <div className={styles.arrowIcon}>
            <Image src={rightArrowIcon} alt="arrow-icon" />
          </div>
        </div>
        <div className={styles.adminItem}>
          <div className={styles.adminIcon}>
            <Image src={pieChartIcon} alt="piechart-icon" width={16} />
          </div>
          <div className={styles.adminText}>Analytics</div>
          <div className={styles.arrowIcon}>
            <Image src={rightArrowIcon} alt="arrow-icon" />
          </div>
        </div>
      </div>
      <div className={styles.walletContainer}>
        <div className={styles.walletIcon}>
          <Image src={ethIcon} alt="eth-icon" />
        </div>
        <div className={styles.signOutContainer}>
          <div className={styles.signOutText}>Log Out</div>
          <div className={signOutIcon}>
            <Image
              src={signOutIcon}
              alt="signout-icon"
              className={styles.signOutIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
