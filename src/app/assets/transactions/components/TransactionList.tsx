import React from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../public/Icons/polygon-down-icon.svg";
import eczodexLogo from "../../../../../public/Icons/eczodex-icon.svg";
import usdcLogo from "../../../../../public/Icons/usdc-icon.svg";

const styles = {
  listContainer: `w-full min-h-[40rem] h-fit bg-[#ffff] overflow-hidden`,
  tableContainer: `bg-red-400 w-full h-full flex flex-col px-[2.44rem] pb-[2.06rem]`,
  tableHeadContainer: `w-full h-[4.56rem] flex text-left`,
  tableHeadTransaction: `basis-4/12 self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadDate: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadTime: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadStatus: `bg-red-500 basis-4/12  self-center flex justify-end gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-[1.87rem]`,
  tableItemWrapper: `w-full h-fit flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid`,
  tableBodyContainer: `w-full h-[4.56rem] flex`,
  tableBodyTransaction: `bg-red-500 basis-4/12  h-full flex items-center gap-[1.25rem] self-center px-[0.87rem]`,
  tableBodyDate: `basis-2/12  self-center px-[0.87rem]`,
  tableBodyTime: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyStatus: `basis-4/12 self-center px-[0.87rem] flex items-center justify-between`,
  assetLogoCtn: `w-[3.8rem] h-[3.8rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] flex flex-col items-center justify-center gap-[0.25rem]`,
  assetName: `text-base font-medium leading-[1.4rem] text-[#110E2E]`,
  quantityText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#A4ACD1]`,
  amountBorrowedText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#110E2E]`,
  liquidationPriceText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#2A9DBD]`,
  statusContainer: `w-[9.6rem] h-fit flex flex-col gap-[0.94rem]`,
  statusCtn: `w-full flex items-center justify-between`,
  statusText: `text-[0.82rem] font-light text-[#110E2E] leading-[0.87rem]`,
  statusTextSafe: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#7FD7A4]`,
  statusTextStable: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#2586C5]`,
  statusTextRisk: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#D1CA7B]`,
  statusBar: `flex`,
  dropDownArrow: `flex`,
  listNavContainer: `w-fit flex items-center gap-[0.69rem] mx-auto mt-[5rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: ``,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
};

const TransactionList = () => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeadContainer}>
          <div className={styles.tableHeadTransaction}>
            <span>Transaction</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadDate}>
            <span>Date</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadTime}>
            <span>Time</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadStatus}>
            <span>Status</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
        </div>
        <div className={styles.tableBodyWrapper}>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainer}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={eczodexLogo} alt="eczodexLogo" width={61} />
                </div>
                <div className={styles.assetName}>Mint Eczodex Stablecoin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
