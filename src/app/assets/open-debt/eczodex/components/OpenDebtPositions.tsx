import React from "react";
import Image from "next/image";

import eczodexLogo from "../../../../../../public/Images/VectorSecondary.svg";
import OpenDebtTable from "./OpenDebtTable";

const styles = {
  openDebt: `w-full max-w-[73rem] min-h-[56rem] h-fit bg-[#ffff] self-center mx-auto overflow-hidden flex flex-col gap-[1rem] justify-between`,
  dashContainer: `relative w-full h-fit min-h-[14rem] p-[1.5rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover rounded-[1rem] `,
  topCtn: `flex flex-col text-[#ffff]`,
  title: `text-[1.1rem] md:text-[1.5rem] leading-[1.1rem] md:leading-[1.5rem]font-semibold mb-[1rem]`,
  dateCtn: `flex gap-[0.62rem]`,
  dateTxt: `text-[0.62rem] md:text-[0.75rem] font-normal leading-[0.75rem] capitalize`,
  dashCtnWrapper: `bg-gray-500 w-fit md:w-[90%] h-fit min-h-[8.3rem] flex justify-evenly max-md:mt-[0.5rem] max-md:flex-col max-md:gap-y-[1rem] md:gap-[0.5rem]`,
  dashChart: `bg-yellow-500 max-md:absolute max-md:bottom-5 max-md:right-5 w-[8.3rem] h-[8.3rem] self-start flex flex-col items-center justify-center bg-[url('../../public/Icons/dashChart.svg')] bg-cover bg-center`,
  dashChartCtn: `bg-pink-500 text-center`,
  dashChartTxt: `text-[0.62rem] font-normal leading-[0.62rem] `,
  dashChartTxtSec: `text-[1.25rem] font-semibold leading-[1.25rem]`,
  dashboardInfoWrapper: `bg-purple-500`,
  dashInfoContainer: `bg-red-500 md:self-end flex flex-col gap-[0.75rem] md:gap-[1rem]`,
  infoText: `text-[0.75rem] md:text-base font-medium `,
  logoContainer: `flex gap-[0.62rem]`,
  logoIcon: `w-[1rem] md:w-[2.1rem] flex`,
  logoText: `text-[1.12rem] md:text-[2.25rem] font-semibold uppercase`,
  infoTextSec: `text-[1.12rem] md:text-[2.25rem] font-semibold flex`,
  dollarSign: `text-[0.87rem] md:text-[1.2rem] font-semibold mt-2 mr-1`,
  stroke: `h-[4.18rem] border-r-[2px] mb-[1rem] self-end hidden md:block`,
};

const OpenDebtPositions = () => {
  return (
    <div className={styles.openDebt}>
      <div className={styles.dashContainer}>
        <div className={styles.topCtn}>
          <div className={styles.title}>Open Debt Positions</div>
          <div className={styles.dateCtn}>
            <div className={styles.dateTxt}>Last Updated:</div>
            <div className={styles.dateTxt}>Sep 04 09:41</div>
          </div>
          <div className={styles.dashCtnWrapper}>
            <div className={styles.dashChart}>
              <div className={styles.dashChartCtn}>
                <div className={styles.dashChartTxt}>Warning</div>
                <div className={styles.dashChartTxtSec}>03</div>
                <div className={styles.dashChartTxt}>Alert</div>
              </div>
            </div>
            <div className={styles.dashInfoContainer}>
              <div className={styles.infoText}>Review Collateral Position</div>
              <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                  <Image
                    src={eczodexLogo}
                    alt="eczodexLogo"
                    width={35}
                  />
                </div>
                <div className={styles.logoText}>ECZ</div>
              </div>
            </div>
            <div className={styles.stroke}></div>
            <div className={styles.dashInfoContainer}>
              <div className={styles.infoText}>Utilized Collateral</div>
              <div className={styles.infoTextSec}>
                <span className={styles.dollarSign}> $ </span>135,000.00
              </div>
            </div>
            <div className={styles.stroke}></div>
            <div className={styles.dashInfoContainer}>
              <div className={styles.infoText}>Amount Borrowed</div>
              <div className={styles.infoTextSec}>
                <span className={styles.dollarSign}> $ </span>100,000.00
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <OpenDebtTable /> */}
    </div>
  );
};

export default OpenDebtPositions;
