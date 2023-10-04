"use client";
import React, { useState } from "react";
import Image from "next/image";

import prevNavLogo from "../../../../../../public/Icons/left-arrow2.svg";

import Link from "next/link";
import AdjustDebt from "./AdjustDebt";
import ChooseBank from "./ChooseBank";
import ConfirmTransfer from "./ConfirmTransfer";
import SelectWallets from "./SelectWallets";


const styles = {
  mint: `w-[73rem] min-h-[55rem] h-fit bg-[#ffff] border-[#E4E3EB] border-[1px] border-solid mx-auto self-center rounded-[1rem] p-[4.75rem]`,
  headContainer: `flex`,
  prevNavLogo: `absolute w-[3.81rem] h-[3.81rem]`,
  titleContainer: `mx-auto`,
  subTitle: `text-[#6E7187] font-normal text-base leading-normal capitalize text-center`,
  title: `text-[#110E2E] font-medium text-[2rem] leading-normal capitalize text-center tracking-[0.05rem]`,
  mintBox: `w-[51.56rem] h-fit pb-[2.5rem] mt-[2rem] mx-auto rounded-[1rem] border-[#E4E3EB] border-[1px] border-solid overflow-hidden flex flex-col items-center`,
  menuContainer: `w-full h-fit flex border-box`,
  menuItem: `basis-1/4 bg-[#ffff] p-[1rem] border-[#E4E3EB] border-r-[1px] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#6E7187]`,
  activeMenuItem: `basis-1/4 bg-[#2B8AC8] p-[1rem] border-[#E4E3EB] border-r-[1px] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#ffff]`,
  menuItemL: `basis-1/4 bg-[#ffff] p-[1rem] border-[#E4E3EB] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#6E7187]`,
  activeMenuItemL: `basis-1/4 bg-[#2B8AC8] p-[1rem] border-[#E4E3EB] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#ffff]`,
  subHead: `w-100 h-auto mx-[2.81rem] my-[2.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
  assetContainer: `w-full h-auto px-[2.81rem] grid grid-cols-2  gap-[0.63rem] `,
  asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
  assetActiveName: `font-semibold text-base text-[#110E2E]`,
  assetName: `font-medium text-base text-[#110E2E]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto mt-[2rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  exitBtn: `font-bold text-[1rem] text-[#2B8AC8] tracking-[0.025rem] text-center mt-[1.5rem]`
};

const RedeemAsset = () => {
  const [activeTab, setActiveTab] = useState<string>("one");

  return (
    <div className={styles.mint}>
      <div className={styles.headContainer}>
         {activeTab !== "five" && (
          <Link href="/" className={styles.prevNavLogo}>
            <Image src={prevNavLogo} alt="prevNavLogo" />
          </Link>
        )}
        <div className={styles.titleContainer}>
          <div className={styles.subTitle}>Eczodex Stablecoin</div>
          <div className={styles.title}>Redeem Eczodex Stablecoin</div>
        </div>
      </div>
      <div className={styles.mintBox}>
      {activeTab !== "five" && (
          <div className={styles.menuContainer}>
            <div
              className={
                activeTab === "one" ? styles.activeMenuItem : styles.menuItem
              }
            >
              Step 1
            </div>
            <div
              className={
                activeTab === "two" ? styles.activeMenuItem : styles.menuItem
              }
            >
              Step 2
            </div>
            <div
              className={
                activeTab === "three" ? styles.activeMenuItem : styles.menuItem
              }
            >
              Step 3
            </div>
            <div
              className={
                activeTab === "four" ? styles.activeMenuItem : styles.menuItem
              }
            >
              Step 4
            </div>
          </div>
        )}
        {activeTab === "one" && <SelectWallets />}
        {activeTab === "two" && <AdjustDebt />}
        {activeTab === "three" && <ChooseBank />}
        {activeTab === "four" && <ConfirmTransfer />}
      </div>
      {activeTab === "one" && (
        <div onClick={() => setActiveTab("two")} className={styles.primaryBtn}>
          Next
        </div>
      )}
      {activeTab === "two" && (
        <div onClick={() => setActiveTab("three")} className={styles.primaryBtn}>
          Redeem
        </div>
      )}
      {activeTab === "three" && (
        <div onClick={() => setActiveTab("four")} className={styles.primaryBtn}>
          Redeem
        </div>
      )}
      {activeTab === "four" && (
        <div onClick={() => setActiveTab("five")} className={styles.primaryBtn}>
          Next
        </div>
      )}
    </div>
  );
};

export default RedeemAsset;
