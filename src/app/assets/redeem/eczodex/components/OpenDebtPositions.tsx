import React from "react";
import Image from "next/image";

import eczodexLogo from "../../../../../../public/Images/VectorSecondary.svg";
import OpenDebtTable from "./OpenDebtTable";

const styles = {
  openDebt: `w-[73rem] min-h-[56rem] h-fit bg-[#ffff] self-center mx-auto overflow-hidden flex flex-col justify-between`,
  dashContainer: `w-full h-[15rem] p-[2.5rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  rounded-[1rem] `,
  topCtn: `flex flex-col text-[#ffff]`,
  title: `text-[1.5rem] font-semibold mb-[1rem]`,
  dateCtn: `flex gap-[0.62rem]`,
  dateTxt: `text-[0.75rem] font-normal leading-[0.75rem] capitalize`,
  dashCtnWrapper: `w-full h-[8.3rem] flex `,
  dashChart: `w-[8.3rem] h-full flex flex-col items-center justify-center bg-[url('../../public/Icons/dashChart.svg')] bg-cover`,
  dashChartCtn: `text-center`,
  dashChartTxt: `text-[0.62rem] font-normal leading-[0.62rem] `,
  dashChartTxtSec: `text-[1.25rem] font-semibold leading-[1.25rem]`,
  dashInfoContainer: ` h-[8.3rem] p-[2.5rem] flex flex-col gap-[1.25rem ]`,
  infoText: `text-[1rem] font-semibold `,
  logoContainer: `flex gap-[0.62rem]`,
  logoIcon: `flex`,
  logoText: `text-[2rem] font-semibold`,
  infoTextSec: `text-[2rem] font-semibold flex`,
  dollarSign: `text-[1.1rem] font-semibold mt-2 mr-1`,
  stroke: `h-[4.18rem] border-r-[2px]  self-center`,
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
                    height={36}
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
      <OpenDebtTable />
    </div>
  );
};

export default OpenDebtPositions;
