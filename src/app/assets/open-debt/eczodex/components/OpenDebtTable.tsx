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
import OpenDebtTableItem from "./OpenDebtTableItem";

const styles = {
  listContainer: `w-full min-w-[19rem] md:min-h-[40rem] h-fit bg-[#ffff] border-[#E4E3EB] rounded-[1rem] md:border-[1px] border-solid md:overflow-x-scroll no-scrollbar`,
  tableContainer: `w-full h-full flex flex-col md:px-[0.87rem] md:pb-[2.06rem] `,
  tableHeadContainer: `w-full h-[4.56rem] items-center hidden md:flex md:min-w-[56rem]`,
  tableHeadText: `w-max text-base font-normal text-center leading-[1.4rem] text-[#110E2E]`,
  tableHeadSymbol: ` basis-3/5 self-center flex items-center  gap-[0.2rem] px-[0.87rem]`,
  tableHeadQuantity: ` basis-2/5 self-center flex items-center  gap-[0.2rem] px-[0.87rem]`,
  tableHeadAmountBorrowed: `basis-1/2 self-center flex items-center  gap-[0.2rem] px-[0.87rem]`,
  tableHeadLiquidationPrice: ` basis-1/2  self-center flex items-center  gap-[0.2rem] px-[0.87rem]`,
  tableHeadStatus: `basis-full  self-center flex items-center  gap-[0.2rem] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-auto flex flex-col gap-[0.5rem] md:gap-[1rem]`,
  tableItemWrapper: `w-full h-auto flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid min-w-[18rem] md:min-w-[56rem]`,
  tableItemWrapperToggled: ` w-full h-auto flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid bg-[#2B8AC8] bg-opacity-[0.05]`,
  tableBodyContainer: `w-full h-fit min-h-[4.56rem] max-md:flex-col flex items-center `,
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
  selectLogoCtnSecondary: `w-[3.8rem] h-[3.8rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] max-md:hidden flex flex-col items-center justify-center gap-[0.25rem]`,
  selectLogoTxt: `text-[0.75rem] font-medium tracking-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] `,
  symbolCtn: `flex gap-[1.39rem]`,
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



const OpenDebtTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {width: breakPointWidth } = useWindowDimensions();


  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const fadeInVariants = {
    hidden: { opacity: 0, height: 0},
    visible: { opacity: 1, height: "11.12rem", transition: { duration: 0.2 } },
  };

  const fadeInVariantsSecondary = {
    hidden: { opacity: 0, height: 0},
    visible: { opacity: 1, height: "5.56rem", transition: { duration: 0.2 } },
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeadContainer}>
          <div className={styles.tableSubContainerFirst}>
            <div className={styles.tableHeadSymbol}>
              <span className={styles.tableHeadText}>Symbol</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
            <div className={styles.tableHeadQuantity}>
              <span className={styles.tableHeadText}>Quantity</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
          </div>
          <div className={styles.tableSubContainerSecond}>
            <div className={styles.tableHeadAmountBorrowed}>
              <span className={styles.tableHeadText}>Amount Borrowed</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
            <div className={styles.tableHeadLiquidationPrice}>
              <span className={styles.tableHeadText}>Liquidation Price</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
          </div>
          <div className={styles.tableSubContainerThird}>
            <div className={styles.tableHeadStatus}>
              <span className={styles.tableHeadText}>Status</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
          </div>
        </div>
        <div className={styles.tableBodyWrapper}>
          <OpenDebtTableItem/>
          <OpenDebtTableItem/>
          <OpenDebtTableItem/>
          <OpenDebtTableItem/>
          <OpenDebtTableItem/>
        </div>
      </div>
      <div className={styles.listNavContainer}>
            <div className={styles.navContainer}>
              <div className={styles.listNavArrow}>
                <Image
                  src={listNavArrowLeft}
                  alt="listNavArrowLeft"
                  width={6}
                />
              </div>
              <div className={styles.listNavText}>Prev</div>
            </div>
            <div className={styles.listActivePage}>1</div>
            <div className={styles.listPage}>2</div>
            <div className={styles.listPage}>3</div>
            <div className={styles.navContainer}>
              <div className={styles.listNavText}>Next</div>
              <div className={styles.listNavArrow}>
                <Image
                  src={listNavArrowRight}
                  alt="listNavArrowRight"
                  width={6}
                />
              </div>
            </div>
          </div>
    </div>
  );
};

export default OpenDebtTable;
