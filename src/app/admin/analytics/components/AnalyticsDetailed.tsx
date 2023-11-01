import React from "react";
import Image from "next/image";

import eczodexLogo from "../../../../../public/Icons/eczodex-logo2.svg";
import stocksIcon from "../../../../../public/Icons/stocks-icon.png";
import cashIcon from "../../../../../public/Icons/cash-icon.png";
import cryptoIcon from "../../../../../public/Icons/crypto-icon.png";
import AnalyticsTable from "./AnalyticsTable";
import Header from "@/components/header/Header";

const styles = {
  container: `w-full h-full flex flex-col overflow-auto`,
  analytics: `w-full md:w-[98%] min-h-screen h-fit  self-center mx-auto overflow-hidden flex flex-col gap-y-[1rem] justify-between p-[1rem]`,
  dashboardContainer: `w-full h-fit md:min-h-[25rem] bg-[#ffff] border-[#E4E3EB] rounded-[1rem] md:border-[1px] self-center mx-auto border-solid max-md:flex-col flex items-center md:items-start justify-start gap-x-[1.5rem] px-[1.5rem] pb-[1rem]`,
  dashLeftCtn: `w-[13rem] md:w-[21rem] h-[13rem] md:h-[21rem] flex flex-col gap-[1rem] items-center justify-center bg-[url('../../public/Images/Analytics-piechart.svg')] bg-cover bg-center`,
  pieChartTitle: `text-center font-semibold leading-[0.75rem] md:leading-[1.25rem] text-[0.75rem] md:text-[1.25] text-[#6E7187]`,
  pieChartSubTitle: `font-bold leading-[2rem] md:leading-[3.37rem] text-[2rem] md:text-[3.37rem] text-[#110E2E]`,
  dashRightCtn: `flex-1 w-full h-fit md:min-h-[21.47rem] h-fit mt-[2rem]`,
  rightCtnTop: `grid grid-cols-2 auto-cols-auto`,
  hrLine: `w-full h-[2px] bg-[#E4E3EB] my-[1rem]`,
  rightCtnBottom: `grid grid-cols-2 auto-cols-fr gap-2`,
  dashItemCtn: `flex flex-col gap-[0.5rem]`,
  dashItemCtnSec: `hidden md:flex flex-col gap-[0.5rem]`,
  titleCtn: `flex items-center`,
  dashIcon: `w-[1rem] h-[1rem] flex mr-[0.75rem]`,
  dashItemName: `text-base leading-[1rem ] font-semibold text-[#6E7187]`,
  dashItemStocksName: `text-base font-semibold text-[#6AC09A]`,
  dashItemCashName: `text-base font-semibold text-[#7AC9D2]`,
  dashItemCryptoName: `text-base font-semibold text-[#B9C06A]`,
  dashItemAmount: `text-base md:text-[2.25rem] leading-[1rem ] md:leading-[2.25rem] font-semibold text-[#110E2E]`,
  dashItemAmountSec: `text-[1.5rem] leading-[2rem] font-semibold text-[#110E2E]`,
  dashItemPercent: `font-normal text-[0.87rem] md:text-[1.25rem] leading-[0.87 rem] md:leading-[1.25rem]`,
  assetItemStocks: `w-auto  max-md:block hidden px-[0.3rem] py-[0.4rem] rounded-xl text-[0.87rem] font-normal text-center text-white leading-[1rem] bg-gradient-to-br from-[#79C8D1] via-[#68BF98] to-[#79C8D1]`,
  assetItemCash: `w-auto  max-md:block hidden px-[0.3rem] py-[0.4rem] rounded-xl text-[0.87rem] font-normal text-center text-white leading-[1rem] bg-gradient-to-br from-[#B0DFE4] via-[#79C8D1] to-[#B0DFE4]`,
  assetItemCrypto: `w-auto  max-md:block hidden px-[0.3rem] py-[0.4rem] rounded-xl text-[0.87rem] font-normal text-center text-white leading-[1rem] bg-gradient-to-br from-[#D5D9A6] via-[#B8BF68] to-[#D5D9A6]`
};
  
const AnalyticsDetailed = () => {
  return (
    <div className={styles.container}> 
    <Header/>
    <div className={styles.analytics}>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashLeftCtn}>
          <div className={styles.pieChartTitle}>ECZ Treasury</div>
          <div className={styles.pieChartSubTitle}>$10B</div>
        </div>
        <div className={styles.dashRightCtn}>
          <div className={styles.rightCtnTop}>
            <div className={styles.dashItemCtn}>
              <div className={styles.dashItemName}>Total Collateral</div>
              <div className={styles.dashItemAmount}>$10.00B</div>
              <div className={styles.dashItemPercent}>30% of total</div>
            </div>
            <div className={styles.dashItemCtn}>
              <div className={styles.titleCtn}>
                <div className={styles.dashIcon}>
                  <Image
                    src={eczodexLogo}
                    alt="eczodexLogo "
                    width={16}
                    height={16}
                  />
                </div>
                <div className={styles.dashItemName}>ECZ Market Cap</div>
              </div>
              <div className={styles.dashItemAmount}>$5.00B</div>
              <div className={styles.dashItemPercent}>50% of total</div>
            </div>
          </div>
          <hr className={styles.hrLine} />
          <div className={styles.rightCtnBottom}>
            <div className={styles.dashItemCtnSec}>
              <div className={styles.titleCtn}>
                <div className={styles.dashIcon}>
                  {" "}
                  <Image
                    src={stocksIcon}
                    alt="stocksIcon "
                    width={16}
                    height={16}
                  />
                </div>
                <div className={styles.dashItemName}>Stocks</div>
              </div>
              <div className={styles.dashItemAmountSec}>$5.00B</div>
              <div className={styles.dashItemPercent}>50% of total</div>
            </div>
            <div className={styles.dashItemCtnSec}>
              <div className={styles.titleCtn}>
                <div className={styles.dashIcon}>
                  <Image
                    src={cashIcon}
                    alt="cashIcon "
                    width={16}
                    height={16}
                  />
                </div>
                <div className={styles.dashItemName}>Cash</div>
              </div>
              <div className={styles.dashItemAmountSec}>$3.00B</div>
              <div className={styles.dashItemPercent}>50% of total</div>
            </div>
            <div className={styles.dashItemCtnSec}>
              <div className={styles.titleCtn}>
                <div className={styles.dashIcon}>
                  <Image
                    src={cryptoIcon}
                    alt="cryptoIcon "
                    width={16}
                    height={16}
                  />
                </div>
                <div className={styles.dashItemName}>Crypto</div>
              </div>
              <div className={styles.dashItemAmountSec}>$2.00B</div>
              <div className={styles.dashItemPercent}>50% of total</div>
            </div>
            <div className={styles.assetItemStocks}>
            Stocks
            </div>
            <div className={styles.assetItemCash}>
            Cash
            </div>
            <div className={styles.assetItemCrypto}>
            Crypto
            </div>
          </div>
        </div>
      </div>
      <AnalyticsTable />
    </div>
    </div>
  );
};

export default AnalyticsDetailed;
