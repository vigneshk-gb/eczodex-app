"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";

import arrowDownLogo from "../../../../../../public/Icons/polygon-down-icon.svg";
import checkLogo from "../../../../../../public/Icons/check-icon.svg";
import teslaLogo from "../../../../../../public/Icons/tesla-logo.svg";
import ethLogo from "../../../../../../public/Icons/eth-logo2.svg";
import vanguardLogo from "../../../../../../public/Icons/vanguard-logo.svg";
import bitcoinLogo from "../../../../../../public/Icons/bitcoin-logo.svg";
import appleLogo from "../../../../../../public/Icons/apple-logo.svg";
import statusSafe from "../../../../../../public/Icons/status-safe.svg";
import statusStable from "../../../../../../public/Icons/status-stable.svg";
import statusRisk from "../../../../../../public/Icons/status-risk.svg";
import dropDownArrowUp from "../../../../../../public/Icons/dropDownArrowUp.svg";
import dropDownArrowDown from "../../../../../../public/Icons/dropDownArrowDown.svg";
import listNavArrowRight from "../../../../../../public/Icons/nav-right.svg";
import listNavArrowLeft from "../../../../../../public/Icons/nav-left.svg";

import useWindowDimensions from "@/app/hooks/useWindowDimensions ";

const styles = {
  tableItemWrapper: `w-full h-auto flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid min-w-[18rem] md:min-w-[56rem]`,
  tableItemWrapperToggled: ` w-full h-auto flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid bg-[#2B8AC8] bg-opacity-[0.05]`,
  tableBodyContainer: `w-full h-full min-h-[4.56rem] max-md:flex-col flex items-center cursor-pointer z-10`,
  tableSubContainerFirst: `w-full h-fit md:basis-5/12 p-[0.5rem] flex items-center justify-between`,
  tableSubContainerSecond: `w-full h-fit md:basis-4/12 p-[0.5rem] flex items-center justify-between`,
  tableSubContainerThird: `w-full h-fit md:basis-3/12 p-[0.5rem] flex items-center justify-between`,
  tableSubItemTitle: `font-light text-[0.75rem] leading-[1.05rem] md:hidden`,
  toggledContainer: `w-full h-[5.56rem] max-md:flex-col flex items-center border-solid border-t-2 border-opacity-10 border-[#2B8AC8]`,
  toggledCtn: `flex flex-col gap-[0.5rem]`,
  toggledCtnTxt: `font-normal text-[0.75rem] md:text-base leading-[1.05rem] md:leading-[1.4rem] text-[#6E7187]`,
  toggledCtnTxtSec: `font-bold text-[0.87rem] md:text-base leading-[1.22rem] md:leading-[1.4rem] text-[#110E2E]`,
  tableBodySymbol: `w-fit md:basis-3/5  gap-x-[1.56rem] h-full flex items-center self-center px-[0.87rem]`,
  tableBodyQuantity: `w-fit md:basis-2/5  self-center px-[0.87rem] flex items-center gap-x-[0.4rem]`,
  tableBodyAmountBorrowed: `w-fit md:basis-1/2 self-center px-[0.87rem]`,
  tableBodyLiquidationPrice: ` w-fit md:basis-1/2 self-center px-[0.87rem]`,
  tableBodyStatus: `basis-full self-center px-[0.87rem] flex items-center justify-between gap-x-[0.94rem]`,
  selectLogoCtn: `w-[3.5rem] h-[3.5rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] max-md:hidden flex flex-col items-center justify-center gap-[0.25rem]`,
  selectLogoCtnSecondary: `w-[3.8rem] h-[1.5rem] mr-[2rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] hidden max-md:flex items-center justify-center gap-[0.25rem]`,
  selectLogoTxt: `text-[0.75rem] font-medium tracking-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] `,
  symbolCtn: `flex gap-[1.39rem] items-center`,
  symbolText: `text-[0.87rem] md:text-base leading-[1.2rem] md:leading-[1.4rem] font-normal`,
  quantityText: `text-[0.87rem] md:text-[1.25rem] leading-[1.22rem] md:leading-[1.75rem] font-extrabold text-[#A4ACD1]`,
  amountBorrowedText: `text-[0.87rem] md:text-[1.25rem] leading-[1.22rem] md:leading-[1.75rem] font-extrabold text-[#110E2E]`,
  liquidationPriceText: `text-[0.87rem] md:text-[1.25rem] leading-[1.22rem] md:leading-[1.75rem] font-extrabold text-[#2A9DBD]`,
  statusContainer: `w-fit h-fit flex flex-col gap-[0.94rem]`,
  statusCtn: `w-full flex items-center justify-between gap-[0.3rem]`,
  statusText: `text-[0.75rem] md:text-[0.62rem] font-light text-[#110E2E] leading-[1 rem] md:leading-[0.87rem]`,
  statusTextSafe: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.62rem] text-[#7FD7A4]`,
  statusTextStable: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.62rem] text-[#2586C5]`,
  statusTextRisk: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.62rem] text-[#D1CA7B]`,
  statusBar: `hidden md:flex`,
  dropDownArrow: `hidden md:flex`,
  dropDownArrowToggled: `hidden md:flex rotate-180`,
  dropDownArrowSecondary: `max-md:flex hidden`,
  dropDownArrowToggledSecondary: `max-md:flex hidden rotate-180`,
  listNavContainer: `w-full md:w-fit flex justify-center items-center gap-[0.69rem] mx-auto mt-[0.5rem] md:mt-[2rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: ``,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
};

const OpenDebtTableItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width: breakPointWidth } = useWindowDimensions();

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  
  const fadeInVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "5.56rem", transition: { duration: 0.2 } },
  };

  const fadeInVariantsSecondary = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "11.12rem", transition: { duration: 0.2 } },
  };


  return (
    <div className={isOpen ? styles.tableItemWrapperToggled : styles.tableItemWrapper}>
      <div className={styles.tableBodyContainer} onClick={toggleOpen}>
        <div className={styles.tableSubContainerFirst}>
          <div className={styles.tableBodySymbol}>
            <div className={styles.selectLogoCtn}>
              <Image src={checkLogo} alt="checkLogo" width={23} />
              <div className={styles.selectLogoTxt}>Select</div>
            </div>
            <div className={styles.symbolCtn}>
              <Image src={ethLogo} alt="ethLogo" width={25} />
              <div className={styles.symbolText}>ETH</div>
            </div>
          </div>
          <div className={styles.tableBodyQuantity}>
            <span className={styles.tableSubItemTitle}>Quantity:</span>
            <div className={styles.quantityText}>7.69</div>
            <div
              className={
                isOpen
                  ? styles.dropDownArrowToggledSecondary
                  : styles.dropDownArrowSecondary
              }
            >
              <Image
                src={dropDownArrowDown}
                alt="dropDownArrowDown"
                width={18}
              />
            </div>
          </div>
        </div>
        <div className={styles.tableSubContainerSecond}>
          <div className={styles.tableBodyAmountBorrowed}>
            <div className={styles.tableSubItemTitle}>Amount Borrowed</div>
            <div className={styles.amountBorrowedText}>$ 5,000.00 </div>
          </div>
          <div className={styles.tableBodyLiquidationPrice}>
            <div className={styles.tableSubItemTitle}>Liquidation Price</div>
            <div className={styles.liquidationPriceText}>$975.29</div>
          </div>
        </div>
        <div className={styles.tableSubContainerThird}>
          <div className={styles.tableBodyStatus}>
            <div className={styles.statusContainer}>
              <div className={styles.statusCtn}>
                <div className={styles.statusText}>Status:</div>
                <div className={styles.statusTextStable}>STABle</div>
              </div>
              <div className={styles.statusBar}>
                <Image src={statusStable} alt="statusSafe" width={155} />
              </div>
            </div>
            <div
              className={
                isOpen ? styles.dropDownArrowToggled : styles.dropDownArrow
              }
            >
              <Image
                src={dropDownArrowDown}
                alt="dropDownArrowDown"
                width={18}
              />
            </div>
          </div>
          <div className={styles.selectLogoCtnSecondary}>
              <div className={styles.selectLogoTxt}>Select</div>
            </div>
        </div>
      </div>

      <motion.div
        className={styles.toggledContainer}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={
          breakPointWidth < 768 ? fadeInVariantsSecondary : fadeInVariants
        }
      >
        <div className={styles.tableSubContainerFirst}>
          <div className={styles.tableBodySymbol}></div>
          <div className={styles.tableBodyQuantity}>
            <div className={styles.toggledCtn}>
              <div className={styles.toggledCtnTxt}>Quantity</div>
              <div className={styles.toggledCtnTxtSec}>7.69</div>
            </div>
          </div>
        </div>
        <div className={styles.tableSubContainerSecond}>
          <div className={styles.tableBodyAmountBorrowed}>
            <div className={styles.toggledCtn}>
              <div className={styles.toggledCtnTxt}>Amount Borrowed</div>
              <div className={styles.toggledCtnTxtSec}>$ 5,000.00</div>
            </div>
          </div>
          <div className={styles.tableBodyLiquidationPrice}>
            <div className={styles.toggledCtn}>
              <div className={styles.toggledCtnTxt}>Transaction Date</div>
              <div className={styles.toggledCtnTxtSec}>3 August 2022</div>
            </div>
          </div>
        </div>
        <div className={styles.tableSubContainerThird}>
          <div className={styles.tableBodyStatus}>
            <div className={styles.toggledCtn}>
              <div className={styles.toggledCtnTxt}>Time</div>
              <div className={styles.toggledCtnTxtSec}>10:32 PM</div>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default OpenDebtTableItem;
