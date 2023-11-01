"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, animate } from "framer-motion";

import EczodexLogo from "../../../public/main-logo.svg";
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

const styles = {
  sidebar: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] bg-[url('../../public/Images/SidebarBg.png')] bg-cover bg-center flex flex-col fixed max-xl:hidden`,
  logo: `mt-[2rem] mx-auto`,
  navWrapper: `w-full h-full flex flex-col justify-between py-[1rem] gap-y-[0.5rem]`,
  navItemWrapper: `flex flex-col`,
  navContainer: `w-full h-fit mt-[1rem] flex flex-col gap-y-[1.5rem]`,
  navItem: `flex items-center justify-between cursor-pointer`,
  navActiveIndicator: `absolute w-[0.3rem] h-[4rem] rounded-r-[0.75rem] bg-[#fff]`,
  navCtn: `flex ml-[1.75rem] gap-x-[1.38rem]`,
  navIcon: `w-[3rem] h-[3rem] rounded-md bg-white flex justify-center items-center`,
  navIconSecondary: `w-[3rem] h-[3rem] rounded-md bg-white flex justify-center items-center bg-opacity-10`,
  navText: `text-[#FFFFFF] self-center font-semibold text-base`,
  subNavContainer: `w-full h-fit flex flex-col mt-[1rem] gap-y-[0.5rem] `,
  subNavContainerSec: `w-full h-fit flex flex-col mt-[1.3rem] gap-y-[0.5rem] `,
  subNavIconContainer: `w-fit pt-[0.5rem] flex flex-col justify-center items-center gap-[0.5rem]`,
  subNavTitle: `text-[#FFFFFF] text-[0.75rem] tracking-[0.11rem] font-normal uppercase ml-[2.25rem]`,
  subNavItem: `w-fit ml-[3rem] flex gap-[2.62rem] items-start `,
  subNavVerticalLine: `w-[1px] h-[2rem] bg-[#ffff]`,
  subNavItemMenuCircleActive: `w-[0.5rem] h-[0.5rem]  bg-[#fff] rounded-md`,
  subNavItemMenuCircle: `w-[0.5rem] h-[0.5rem] border border-[#fff] rounded-md`,
  subNavItemTxt: `text-base font-normal text-[#fff]`,
  subNavItemActiveTxt: `text-base font-semibold text-[#fff]`,
  adminHeading: `text-[#FFFFFF] text-[0.75rem] tracking-[0.11rem] font-normal uppercase mt-auto ml-[2.25rem] mb-[1rem]`,
  adminContainer: `w-full h-fit flex flex-col gap-[2.19rem]`,
  adminItemWrapper: `flex flex-col`,
  arrowIcon: `mr-[2.43rem] cursor-pointer`,
  arrowIconActive: `mr-[2.43rem] -rotate-90 cursor-pointer`,
  walletContainer: `w-full min- h-[5rem] mt-auto bg-[#2B8AC8] rounded-r-[1rem] flex items-center`,
  walletIcon: `w-[3.68rem] h-[3.68rem] ml-[1.31rem]`,
  signOutContainer: `flex gap-[0.75rem] ml-auto mr-[1.81rem] items-center`,
  signOutText: `text-sm font-semibold text-[#ffff]`,
  signOutIcon: `w-[1.5rem] h-[1.5rem]`,
};

const Sidebar = () => {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

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
      setIsSubNavOpen(true);
    } else if (pathname === "/admin/user-account/change-password") {
      setCurrentRoute("change-password");
      setIsSubNavOpen(true);
    }
  }, [pathname]);

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "5.5rem", transition: { duration: 0.2 } },
  };

  return (
    <div className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        <Image src={EczodexLogo} alt="eczodex-logo" />
      </Link>
      <div className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <div className={styles.navItem}>
            {currentRoute === "home" && (
              <div className={styles.navActiveIndicator}></div>
            )}
            <div className={styles.navCtn}>
              <div
                className={
                  currentRoute === "home"
                    ? styles.navIcon
                    : styles.navIconSecondary
                }
              >
                <Image
                  src={currentRoute === "home" ? homeIcon : homeIconWhite}
                  alt="home-icon"
                  width={16}
                  style={{ fill: `#fff` }}
                />
              </div>
              <Link href="/" className={styles.navText}>
                Home
              </Link>
            </div>
          </div>
          <div className={styles.navItem}>
            {currentRoute === "transactions" && (
              <div className={styles.navActiveIndicator}></div>
            )}
            <div className={styles.navCtn}>
              <div
                className={
                  currentRoute === "transactions"
                    ? styles.navIcon
                    : styles.navIconSecondary
                }
              >
                <Image
                  src={
                    currentRoute === "transactions" ? syncIcon : syncIconWhite
                  }
                  alt="sync-icon"
                  width={16}
                />
              </div>
              <Link href="/assets/transactions" className={styles.navText}>
                Transactions
              </Link>
            </div>
          </div>
        </div>
        {currentRoute !== "home" && (
          <div className={styles.navItemWrapper}>
            <div className={styles.subNavTitle}>ECZODEX STABLECOIN</div>
            <div className={styles.subNavContainer}>
              <div className={styles.subNavItem}>
                <div className={styles.subNavIconContainer}>
                  <div
                    className={
                      currentRoute === "mint"
                        ? styles.subNavItemMenuCircleActive
                        : styles.subNavItemMenuCircle
                    }
                  ></div>
                  <div className={styles.subNavVerticalLine}></div>
                </div>
                <Link
                  href="/assets/mint/eczodex"
                  className={
                    currentRoute === "mint"
                      ? styles.subNavItemActiveTxt
                      : styles.subNavItemTxt
                  }
                >
                  Mint
                </Link>
              </div>
              <div className={styles.subNavItem}>
                <div className={styles.subNavIconContainer}>
                  <div
                    className={
                      currentRoute === "open-debt"
                        ? styles.subNavItemMenuCircleActive
                        : styles.subNavItemMenuCircle
                    }
                  ></div>
                  <div className={styles.subNavVerticalLine}></div>
                </div>
                <Link
                  href="/assets/open-debt/eczodex"
                  className={
                    currentRoute === "open-debt"
                      ? styles.subNavItemActiveTxt
                      : styles.subNavItemTxt
                  }
                >
                  Open Debt Positions
                </Link>
              </div>
              <div className={styles.subNavItem}>
                <div className={styles.subNavIconContainer}>
                  <div
                    className={
                      currentRoute === "adjust-debt"
                        ? styles.subNavItemMenuCircleActive
                        : styles.subNavItemMenuCircle
                    }
                  ></div>
                  <div className={styles.subNavVerticalLine}></div>
                </div>
                <Link
                  href="/assets/adjust-debt/eczodex"
                  className={
                    currentRoute === "adjust-debt"
                      ? styles.subNavItemActiveTxt
                      : styles.subNavItemTxt
                  }
                >
                  Adjust Debt Positions
                </Link>
              </div>
              <div className={styles.subNavItem}>
                <div className={styles.subNavIconContainer}>
                  <div
                    className={
                      currentRoute === "redeem"
                        ? styles.subNavItemMenuCircleActive
                        : styles.subNavItemMenuCircle
                    }
                  ></div>
                </div>
                <Link
                  href="/assets/redeem/eczodex"
                  className={
                    currentRoute === "redeem"
                      ? styles.subNavItemActiveTxt
                      : styles.subNavItemTxt
                  }
                >
                  Redeem
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={styles.navItemWrapper}>
          <div className={styles.adminHeading}>Admin</div>
          <div className={styles.adminContainer}>
            <div className={styles.adminItemWrapper}>
              <div className={styles.navItem} onClick={toggleSubNav}>
                {currentRoute === "connected-wallets" ||
                currentRoute === "change-password" ? (
                  <div className={styles.navActiveIndicator}></div>
                ) : (
                  <></>
                )}
                <div className={styles.navCtn}>
                  <div
                    className={
                      currentRoute === "connected-wallets" ||
                      currentRoute === "change-password"
                        ? styles.navIcon
                        : styles.navIconSecondary
                    }
                  >
                    <Image
                      src={
                        currentRoute === "connected-wallets" ||
                        currentRoute === "change-password"
                          ? profileIcon
                          : profileIconWhite
                      }
                      alt="profile-icon"
                      width={16}
                    />
                  </div>
                  <div className={styles.navText}>User Account</div>
                </div>
                {isSubNavOpen ? (
                  <div
                    className={styles.arrowIconActive}
                    onClick={() => setIsSubNavOpen(false)}
                  >
                    <Image src={rightArrowIcon} alt="arrow-icon" width={7} />
                  </div>
                ) : (
                  <div
                    className={styles.arrowIcon}
                    onClick={() => setIsSubNavOpen(true)}
                  >
                    <Image src={rightArrowIcon} alt="arrow-icon" width={7} />
                  </div>
                )}
              </div>
              <motion.div
                className={styles.subNavContainerSec}
                initial="hidden"
                animate={isSubNavOpen ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                <div className={styles.subNavItem}>
                  <div className={styles.subNavIconContainer}>
                    <div
                      className={
                        currentRoute === "connected-wallets"
                          ? styles.subNavItemMenuCircleActive
                          : styles.subNavItemMenuCircle
                      }
                    ></div>
                    <div className={styles.subNavVerticalLine}></div>
                  </div>
                  <Link
                    href="/admin/user-account/connected-wallets"
                    className={
                      currentRoute === "connected-wallets"
                        ? styles.subNavItemActiveTxt
                        : styles.subNavItemTxt
                    }
                  >
                    Connected Wallets
                  </Link>
                </div>
                <div className={styles.subNavItem}>
                  <div className={styles.subNavIconContainer}>
                    <div
                      className={
                        currentRoute === "change-password"
                          ? styles.subNavItemMenuCircleActive
                          : styles.subNavItemMenuCircle
                      }
                    ></div>
                  </div>
                  <Link
                    href="/admin/user-account/change-password"
                    className={
                      currentRoute === "change-password"
                        ? styles.subNavItemActiveTxt
                        : styles.subNavItemTxt
                    }
                  >
                    Change Password
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className={styles.navItem}>
              {currentRoute === "analytics" && (
                <div className={styles.navActiveIndicator}></div>
              )}
              <div className={styles.navCtn}>
                <div
                  className={
                    currentRoute === "analytics"
                      ? styles.navIcon
                      : styles.navIconSecondary
                  }
                >
                  <Image
                    src={
                      currentRoute === "analytics"
                        ? pieChartIcon
                        : pieChartIconWhite
                    }
                    alt="piechart-icon"
                    width={16}
                  />
                </div>
                <Link href="/admin/analytics" className={styles.navText}>
                  Analytics
                </Link>
              </div>
              <div className={styles.arrowIcon}>
                <Image src={rightArrowIcon} alt="arrow-icon" width={7} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.walletContainer}>
        <div className={styles.walletIcon}>
          <Image src={ethIcon} alt="eth-icon" />
        </div>
        <div className={styles.signOutContainer}>
          <Link href="/login" className={styles.signOutText}>
            Log Out
          </Link>
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
