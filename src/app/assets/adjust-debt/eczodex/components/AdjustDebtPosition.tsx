"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import prevNavLogo from "../../../../../../public/Icons/left-arrow2.svg";
import SelectType from "./SelectType";
import AdjustDebt from "./AdjustDebt";
import ChooseBank from "./ChooseBank";
import ConfirmTransfer from "./ConfirmTransfer";
import TransactionStatus from "./TransactionStatus";
import Header from "@/components/header/Header";

const styles = {
  container: `w-full h-full flex flex-col overflow-auto`,
  adjustDebt: `w-full max-w-[73rem] min-h-screen bg-[#ffff] border-[#E4E3EB] border-[1px] border-solid mx-auto md:my-[0.5rem] self-center rounded-[1rem] px-[1rem] md:px-[2.5rem]`,
  headContainer: `flex`,
  prevNavLogo: `absolute w-[3.81rem] h-[3.81rem] hidden md:block`,
  titleContainer: `mx-auto`,
  subTitle: `text-[#6E7187] font-normal text-[0.75rem] md:text-base leading-normal capitalize text-center`,
  title: `text-[#110E2E] font-medium text-[1.25rem] md:text-[2rem] leading-normal capitalize text-center tracking-[0.05rem]`,
  mintBox: `w-full max-w-[51.56rem] h-fit md:pb-[2rem] mt-[2rem] mx-auto rounded-[1rem] border-[#E4E3EB] md:border-[1px] border-solid flex flex-col items-center`,
  menuContainer: `w-full h-fit flex max-md:rounded-[1rem] rounded-t-[1rem] overflow-hidden border-[#E4E3EB] max-md:border`,
  menuItem: `basis-1/5 flex items-center justify-center bg-[#ffff] p-[0.5rem] md:p-[1rem] border-[#E4E3EB] md:border-b border-r border-solid `,
  menuItemTxt: `text-[0.8rem] font-normal tracking-[0.1rem] uppercase text-[#6E7187] hidden md:block`,
  activeMenuItemTxt: `text-[0.8rem] font-normal tracking-[0.1rem] uppercase text-[#ffff] hidden md:block`,
  activeMenuItem: `basis-1/5 h-auto flex items-center justify-center bg-[#2B8AC8] md:p-y-[1rem]  border-[#E4E3EB] max-md:border border-r border-b border-solid `,
  menuItemL: `basis-1/5 flex items-center justify-center bg-[#ffff] md:p-[1rem] border-[#E4E3EB] md:border-b border-solid `,
  activemenuItemL: `basis-1/5 h-auto flex items-center justify-center bg-[#2B8AC8] md:p-y-[1rem]  md:rounded-tr-[1rem] border-[#E4E3EB] max-md:border border-l border-b border-solid `,
  subHead: `w-100 h-auto mx-[2.81rem] my-[2.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
  assetContainer: `w-full h-auto px-[2.81rem] grid grid-cols-2  gap-[0.63rem] `,
  asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
  assetActiveName: `font-semibold text-base text-[#110E2E]`,
  assetName: `font-medium text-base text-[#110E2E]`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  exitBtn: `font-semibold text-[0.87rem] md:text-base text-[#2B8AC8] tracking-[0.025rem] text-center mt-[1.5rem]`,
};

const AdjustDebtPosition = () => {
  const [activeTab, setActiveTab] = useState<string>("two");

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.adjustDebt}>
      <div className={styles.headContainer}>
        {activeTab !== "six" && (
          <Link href="/" className={styles.prevNavLogo}>
            <Image src={prevNavLogo} alt="prevNavLogo" />
          </Link>
        )}
        <div className={styles.titleContainer}>
          <div className={styles.subTitle}>Eczodex Stablecoin</div>
          <div className={styles.title}>Adjust Debt Position</div>
        </div>
      </div>
      <div className={styles.mintBox}>
      {activeTab !== "six" && (
            <div className={styles.menuContainer}>
              <div
                className={
                  activeTab === "one" ? styles.activeMenuItem : styles.menuItem
                }
                onClick={() => setActiveTab("one")}
              >
                <span
                  className={
                    activeTab === "one"
                      ? styles.activeMenuItemTxt
                      : styles.menuItemTxt
                  }
                >
                  Step 1
                </span>
              </div>
              <div
                className={
                  activeTab === "two" ? styles.activeMenuItem : styles.menuItem
                }
                onClick={() => setActiveTab("two")}
              >
                <span
                  className={
                    activeTab === "two"
                      ? styles.activeMenuItemTxt
                      : styles.menuItemTxt
                  }
                >
                  Step 2
                </span>
              </div>
              <div
                className={
                  activeTab === "three"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("three")}
              >
                <span
                  className={
                    activeTab === "three"
                      ? styles.activeMenuItemTxt
                      : styles.menuItemTxt
                  }
                >
                  Step 3
                </span>
              </div>
              <div
                className={
                  activeTab === "four" ? styles.activeMenuItem : styles.menuItem
                }
                onClick={() => setActiveTab("four")}
              >
                <span
                  className={
                    activeTab === "four"
                      ? styles.activeMenuItemTxt
                      : styles.menuItemTxt
                  }
                >
                  Step 4
                </span>
              </div>
              <div
                className={
                  activeTab === "five"
                    ? styles.activemenuItemL
                    : styles.menuItemL
                }
                onClick={() => setActiveTab("five")}
              >
                <span
                  className={
                    activeTab === "five"
                      ? styles.activeMenuItemTxt
                      : styles.menuItemTxt
                  }
                >
                  Step 5
                </span>
              </div>
            </div>
          )}
        {activeTab === "two" && <SelectType />}
        {activeTab === "three" && <AdjustDebt />}
        {activeTab === "four" && <ChooseBank />}
        {activeTab === "five" && <ConfirmTransfer />}
        {activeTab === "six" && <TransactionStatus />}
      </div>
      {activeTab === "two" && (
        <div onClick={() => setActiveTab("three")} className={styles.primaryBtn}>
          Next
        </div>
      )}
      {activeTab === "three" && (
        <div
          onClick={() => setActiveTab("four")}
          className={styles.primaryBtn}
        >
          Next
        </div>
      )}
      {activeTab === "four" && (
        <div
          onClick={() => setActiveTab("five")}
          className={styles.primaryBtn}
        >
          Next
        </div>
      )}
      {activeTab === "five" && (
        <div
          onClick={() => setActiveTab("six")}
          className={styles.primaryBtn}
        >
          Next
        </div>
      )}
    </div>
    </div>
  );
};

export default AdjustDebtPosition;
