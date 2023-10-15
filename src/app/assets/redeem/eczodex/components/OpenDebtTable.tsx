import React from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../../public/Icons/polygon-down-icon.svg";
import checkLogo from "../../../../../../public/Icons/check-icon.svg";
import teslaLogo from "../../../../../../public/Icons/tesla-logo.svg";

const styles = {
  listContainer: `w-full h-[40rem] bg-[#ffff] border-[#E4E3EB] rounded-[1rem] border-[1px] border-solid overflow-hidden`,
  tableContainer: `w-full h-full flex flex-col px-[2.44rem]`,
  tableHeadContainer: `w-full h-[4.56rem] flex text-left`,
  tableHeadSymbol: `basis-3/12 self-center flex gap-[0.62rem] font-normal text-[1rem] leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadQuantity: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-[1rem] leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadAmountBorrowed: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-[1rem] leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadLiquidationPrice: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-[1rem] leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadStatus: `basis-3/12  self-center flex gap-[0.62rem] font-normal text-[1rem] leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-[1.87rem]`,
  tableBodyContainer: `w-full h-[4.56rem] flex border-[#E4E3EB] rounded-[0.5rem] border-[1px] border-solid`,
  tableBodySymbol: `basis-3/12  h-full flex items-center self-center px-[0.87rem]`,
  tableBodyQuantity: `basis-2/12  self-center px-[0.87rem]`,
  tableBodyAmountBorrowed: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyLiquidationPrice: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyStatus: `basis-3/12 self-center px-[0.87rem]`,
  selectLogoCtn: `w-[3.8rem] h-[3.8rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] flex flex-col items-center justify-center gap-[0.25rem]`,
  selectLogoTxt: `text-[0.75rem] font-medium tracking-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] `,
  symbolCtn: `flex gap-[1.39rem] ml-[2.19rem]`,
  symbolText: `text-base leading-[1.4rem] font-normal`,
  quantityText: `text-[1.25rem] leading-[1.75rem] font-extrabold text-[#A4ACD1]`,
  amountBorrowedText: `text-[1.25rem] leading-[1.75rem] font-extrabold text-[#110E2E]`,
  liquidationPriceText: `text-[1.25rem] leading-[1.75rem] font-extrabold text-[#2A9DBD]`,
};

const OpenDebtTable = () => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeadContainer}>
          <div className={styles.tableHeadSymbol}>
            <span>Symbol</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadQuantity}>
            <span>Quantity</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadAmountBorrowed}>
            <span>Amount Borrowed</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadLiquidationPrice}>
            <span>Liquidation Price</span>
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
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySymbol}>
              <div className={styles.selectLogoCtn}>
                <Image src={checkLogo} alt="checkLogo" width={23} />
                <div className={styles.selectLogoTxt}>Select</div>
              </div>
              <div className={styles.symbolCtn}>
                <Image src={teslaLogo} alt="teslaLogo" width={25} />
                <div className={styles.symbolText}>TSLA</div>
              </div>
            </div>
            <div className={styles.tableBodyQuantity}>
              <div className={styles.quantityText}>140.00</div>
            </div>
            <div className={styles.tableBodyAmountBorrowed}>
              <div className={styles.amountBorrowedText}>$20,000.00</div>
            </div>
            <div className={styles.tableBodyLiquidationPrice}>
              <div className={styles.liquidationPriceText}>$178.57</div>
            </div>
            <div className={styles.tableBodyStatus}>
              Cendivo comercial Moctezuma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenDebtTable;
