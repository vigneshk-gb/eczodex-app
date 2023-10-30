import React from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../public/Icons/polygon-down-icon.svg";
import teslaLogo from "../../../../../public/Icons/tesla-logo.svg";
import appleLogo from "../../../../../public/Icons/apple-logo.svg";
import checkLogo from "../../../../../public/Icons/check-icon.svg";
import dropDownArrowUp from "../../../../../public/Icons/dropDownArrowUp.svg";
import dropDownArrowDown from "../../../../../public/Icons/dropDownArrowDown.svg";

import listNavArrowRight from "../../../../../public/Icons/nav-right.svg";
import listNavArrowLeft from "../../../../../public/Icons/nav-left.svg";

const styles = {
  listContainer: `w-full min-h-[40rem] h-fit bg-[#ffff] border-[#E4E3EB] rounded-[1rem] border-[1px] border-solid overflow-hidden pb-[2.69rem]`,
  listHeadContainer: `w-full px-[2.44rem] py-[2rem] flex items-center justify-between`,
  listMenu: `flex items-center gap-[0.5rem]`,
  menuItemAll: ` text-base font-semibold text-[#6E7187] px-[1.5rem] py-[0.3rem]`,
  menuItemAllActive: ` text-base font-semibold text-[#6E7187] px-[1.5rem] py-[0.3rem] border border-[#6E7187] rounded-2xl`,
  menuItemStocks: ` text-base font-semibold text-[#6AC09A] px-[1.5rem] py-[0.3rem]  `,
  menuItemStocksActive: `text-base font-semibold text-[#6AC09A] px-[1.5rem] py-[0.3rem] border border-[#449ECF] rounded-2xl`,
  menuItemCash: `  text-base font-semibold text-[#7AC9D2] px-[1.5rem] py-[0.3rem] `,
  menuItemCashActive: `  text-base font-semibold text-[#7AC9D2] px-[1.5rem] py-[0.3rem] border border-[#7AC9D2] rounded-2xl`,
  menuItemCrypto: `  text-base font-semibold text-[#B9C06A] px-[1.5rem] py-[0.3rem]`,
  menuItemCryptoActive: `  text-base font-semibold text-[#B9C06A] px-[1.5rem] py-[0.3rem] border border-[#B9C06A] rounded-2xl`,
  listTitle: `text-[1.25rem] text-[#110E2E] font-medium`,
  tableContainer: `w-full h-full flex flex-col px-[2.44rem] pb-[2.06rem]`,
  tableHeadContainer: `w-full h-[4.56rem] flex text-center`,
  tableHeadItem: `basis-2/12 self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadTicker: `basis-2/12 self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadName: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadDate: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadAmount: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadEczBorrowed: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadCurrentCollateralValue: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-[1.87rem]`,
  tableItemWrapper: `w-full h-fit flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid`,
  tableBodyContainer: `w-full h-[4.56rem] flex`,
  tableBodyContainerToggled: `w-full h-[4.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex`,
  toggledContainer: `w-full h-[5.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex border-solid border-t-2 border-opacity-10 border-[#2B8AC8]`,
  toggledCtn: `flex flex-col gap-[0.5rem]`,
  toggledCtnTxt: `font-normal text-base leading-[1.4rem] text-[#6E7187]`,
  toggledCtnTxtSec: `font-bold text-base leading-[1.4rem] text-[#110E2E]`,
  tableBodyItem: `basis-2/12  h-full flex items-center self-center px-[0.87rem]`,
  tableBodyTicker: `basis-2/12  h-full flex items-center justify-start gap-[1.25rem] self-center px-[0.87rem]`,
  tableBodyName: `basis-2/12  self-center px-[0.87rem]`,
  tableBodyDate: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyAmount: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyEczBorrowed: `basis-2/12 self-center px-[0.87rem] flex items-center justify-between`,
  tableBodyCurrentCollateralValue: `basis-3/12 self-center px-[0.87rem] flex items-center justify-between`,
  tickerLogoCtn: `w-[3.8rem] h-[3.8rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] flex flex-col items-center justify-center gap-[0.25rem]`,
  tickerLogoTxt: `text-base font-bold leading-[1.4rem]`,
  nameDateTxt: `text-base leading-[1.4rem] font-normal`,
  amountTxt: `text-[1.25rem] leading-[1.75rem] font-extrabold text-[#110E2E]`,
  borrowedCollateralTxt: `text-[1.25rem] leading-[1.75rem] font-extrabold  text-[#2C95D6]`,
  statusContainer: `w-[9.6rem] h-fit flex flex-col gap-[0.94rem]`,
  statusCtn: `w-full flex items-center justify-between`,
  statusText: `text-[0.82rem] font-light text-[#110E2E] leading-[0.87rem]`,
  statusTextSafe: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#7FD7A4]`,
  statusTextStable: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#2586C5]`,
  statusTextRisk: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#D1CA7B]`,
  statusBar: `flex`,
  dropDownArrow: `flex`,
  listNavContainer: `w-full md:w-fit flex justify-center items-center gap-[0.69rem] mx-auto mt-[0.5rem] md:mt-[2rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: ``,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
};

const AnalyticsTable = () => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeadContainer}>
        <div className={styles.listTitle}>Detailed Container</div>
        <div className={styles.listMenu}>
          <div className={styles.menuItemAll}>All</div>
          <div className={styles.menuItemStocksActive}>Stocks</div>
          <div className={styles.menuItemCash}>Cash</div>
          <div className={styles.menuItemCrypto}>Crypto</div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeadContainer}>
          <div className={styles.tableHeadItem}>
            <span>Ticker</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadItem}>
            <span>Name</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadItem}>
            <span>Date</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadItem}>
            <span>Amount</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadItem}>
            <span>ECZ Borrowed</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadItem}>
            <span>Current Collateral Value</span>
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
              <div className={styles.tableBodyTicker}>
                <div className={styles.tickerLogoCtn}>
                  <Image src={teslaLogo} alt="teslaLogo" width={25} />
                </div>
                <div className={styles.tickerLogoTxt}>TSLA</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>Tesla</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>3 August 2022</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.amountTxt}>100</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$10,000.00</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$20,000.00 </div>
              </div>
            </div>
          </div>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainer}>
              <div className={styles.tableBodyTicker}>
                <div className={styles.tickerLogoCtn}>
                  <Image src={appleLogo} alt="appleLogo" width={25} />
                </div>
                <div className={styles.tickerLogoTxt}>AAPL</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>Apple,Inc</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>3 August 2022</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.amountTxt}>100</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$10,000.00</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$20,000.00 </div>
              </div>
            </div>
          </div>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainer}>
              <div className={styles.tableBodyTicker}>
                <div className={styles.tickerLogoCtn}>
                  <Image src={teslaLogo} alt="teslaLogo" width={25} />
                </div>
                <div className={styles.tickerLogoTxt}>TSLA</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>Tesla</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>3 August 2022</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.amountTxt}>100</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$10,000.00</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$20,000.00 </div>
              </div>
            </div>
          </div>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainer}>
              <div className={styles.tableBodyTicker}>
                <div className={styles.tickerLogoCtn}>
                  <Image src={appleLogo} alt="appleLogo" width={25} />
                </div>
                <div className={styles.tickerLogoTxt}>AAPL</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>Apple,Inc</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>3 August 2022</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.amountTxt}>100</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$10,000.00</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$20,000.00 </div>
              </div>
            </div>
          </div>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainer}>
              <div className={styles.tableBodyTicker}>
                <div className={styles.tickerLogoCtn}>
                  <Image src={teslaLogo} alt="teslaLogo" width={25} />
                </div>
                <div className={styles.tickerLogoTxt}>TSLA</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>Tesla</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.nameDateTxt}>3 August 2022</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.amountTxt}>100</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$10,000.00</div>
              </div>
              <div className={styles.tableBodyItem}>
                <div className={styles.borrowedCollateralTxt}>$20,000.00 </div>
              </div>
            </div>
          </div>
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

export default AnalyticsTable;
