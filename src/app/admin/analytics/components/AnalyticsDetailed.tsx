import React from "react";
import Image from "next/image";

import eczodexLogo from "../../../../../public/Icons/eczodex-logo2.svg";
import stocksIcon from "../../../../../public/Icons/stocks-icon.png";
import cashIcon from "../../../../../public/Icons/cash-icon.png";
import cryptoIcon from "../../../../../public/Icons/crypto-icon.png";
import AnalyticsTable from "./AnalyticsTable";

const styles = {
  analytics: `w-[73rem] min-h-[56rem] h-fit flex flex-col gap-[1.87rem] self-center mx-auto my-[2.69rem]`,
  dashboardContainer: `w-full h-[25rem] bg-[#ffff] border-[#E4E3EB] rounded-[1rem] border-[1px] self-center mx-auto border-solid flex items-start justify-start gap-[4rem] px-[2.5rem]`,
  dashLeftCtn: `w-[21.47rem] h-[21.47rem] flex flex-col gap-[1rem] items-center justify-center bg-[url('../../public/Images/Analytics-piechart.svg')] bg-cover bg-center`,
  pieChartTitle: `font-semibold leading-[1rem] text-base text-[#6E7187]`,
  pieChartSubTitle: `font-bold leading-[3rem] text-[3rem] text-[#110E2E]`,
  dashRightCtn: `min-w-[40rem] w-fit min-h-[21.47rem] h-fit mt-[2rem]`,
  rightCtnTop: `grid grid-cols-2`,
  hrLine: `w-[40rem] h-[2px] bg-[#E4E3EB] my-[1rem]`,
  rightCtnBottom: `grid grid-cols-2 gap-y-3`,
  dashItemCtn: `flex flex-col gap-[0.5rem]`,
  titleCtn: `flex items-center`,
  dashIcon: `w-[1rem] h-[1rem] flex mr-[0.75rem]`,
  dashItemName: `text-base font-semibold text-[#6E7187]`,
  dashItemStocksName: `text-base font-semibold text-[#6AC09A]`,
  dashItemCashName: `text-base font-semibold text-[#7AC9D2]`,
  dashItemCryptoName: `text-base font-semibold text-[#B9C06A]`,
  dashItemAmount: `text-[2rem] leading-[2rem] font-semibold text-[#110E2E]`,
  dashItemAmountSec: `text-[1.5rem] leading-[2rem] font-semibold text-[#110E2E]`,
  dashItemPercent: `font-normal text-[1.25rem]`,
};

const AnalyticsDetailed = () => {
  return (
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
            <div className={styles.dashItemCtn}>
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
            <div className={styles.dashItemCtn}>
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
            <div className={styles.dashItemCtn}>
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
          </div>
        </div>
      </div>
      <AnalyticsTable />
    </div>
  );
};

export default AnalyticsDetailed;
