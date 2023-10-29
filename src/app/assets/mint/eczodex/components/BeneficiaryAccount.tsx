import React, { useState } from "react";
import Image from "next/image";

import radioIcon from "../../../../../../public/Icons/radio-icon.svg";
import { AiFillInfoCircle } from "react-icons/ai";

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  beneficiaryContainer: `w-full md:w-[45rem] h-auto mx-auto max-md:flex-col flex justify-evenly items-center gap-[0.62rem] px-[0.5rem] md:px-[1rem]`,
  beneficiaryItem: `relative w-full h-[12rem] md:h-[14rem] flex flex-col px-[1.56rem] py-[1rem] items-start justify-between border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem]`,
  titleContainer: `flex flex-col gap-[0.2rem]`,
  title: `text-[#110E2E] font-semibold text-base md:text-[1.5rem] `,
  titlesecondary: `text-[#110E2E] font-normal text-base md:text-[1.5rem]`,
  subTitle: `text-[#6E7187] text-[0.87rem] md:text-base font-medium tracing-[0.0125rem] uppercase`,
  bioContainer: `flex flex-col gap-[0.4rem]`,
  bioText: `text-[#6E7187] text-[0.87rem] md:text-base font-medium tracing-[0.0125rem] flex`,
  infoIcon: `ml-1 my-auto`,
  radioIcon: `absolute right-[1.1rem] top-[1.1rem]`,
};

const BeneficiaryAccount = () => {
  const [selectedBenificiary, setSelectedBenificiary] =
    useState("us-money-market");

  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Select Beneficiary Account</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.beneficiaryContainer}>
        <div
          className={styles.beneficiaryItem}
          onClick={() => setSelectedBenificiary("us-money-market")}
        >
          <div className={styles.titleContainer}>
            <div
              className={
                selectedBenificiary === "us-money-market" ? styles.title : styles.titlesecondary
              }
            >
              US Money Markets
            </div>
            <div className={styles.subTitle}>5.00%APY</div>
          </div>
          {selectedBenificiary === "us-money-market" && (
              <div className={styles.radioIcon}>
              <Image src={radioIcon} alt="radio-icon" width={20} />
            </div>
          )}
          <div className={styles.bioContainer}>
            <div className={styles.bioText}>
              Current ECZ Borrow Rate: 2% APR
              <AiFillInfoCircle
                className={styles.infoIcon}
                size={15}
                color="#6E7187"
              />
            </div>
            <div className={styles.bioText}>
              Min collateralisation ratio: 100%
            </div>
          </div>
        </div>
        <div className={styles.beneficiaryItem} onClick={() => setSelectedBenificiary('us-certified-deposit')}>
          <div className={styles.titleContainer}>
            <div
              className={
                selectedBenificiary === "us-certified-deposit" ? styles.title : styles.titlesecondary
              }
            >
              US Certified Deposit
            </div>
            <div className={styles.subTitle}>5.75%APY</div>
          </div>
          {selectedBenificiary === "us-certified-deposit" && (
              <div className={styles.radioIcon}>
              <Image src={radioIcon} alt="radio-icon" width={20} />
            </div>
          )}
          <div className={styles.bioContainer}>
            <div className={styles.bioText}>T+5 Redemption</div>
            <div className={styles.bioText}>
              Current ECZ Borrow Rate: 2% APR
              <AiFillInfoCircle
                className={styles.infoIcon}
                size={15}
                color="#6E7187"
              />
            </div>
            <div className={styles.bioText}>
              Min collateralisation ratio: 100%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryAccount;
