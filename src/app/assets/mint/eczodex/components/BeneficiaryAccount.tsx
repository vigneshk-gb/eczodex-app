import React from 'react'
import Image from "next/image";

import radioIcon from "../../../../../../public/Icons/radio-icon.svg";
import { AiFillInfoCircle } from "react-icons/ai";

const styles = {
    subHead: `w-[100%] h-auto px-[2.81rem] mt-[2.5rem] mb-[1.5rem] flex items-center justify-center`,
    hr: `w-full h-[1px] border-[#E4E3EB]`,
    subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
    beneficiaryContainer: `w-[30rem] h-auto mx-auto flex justify-evenly items-center`,
    beneficiaryItem: `relative h-[9rem] flex flex-col px-[1.56rem] py-[1rem] items-start justify-between border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem]`,
    titleContainer: `flex flex-col gap-[0.2rem]`,
    title: `text-[#110E2E] font-semibold text-base `,
    titlesecondary: `text-[#110E2E] font-normal text-base `,
    subTitle: `text-[#6E7187] text-[0.6rem] font-medium tracing-[0.0125rem] uppercase`,
    bioContainer: `flex flex-col gap-[0.4rem]`,
    bioText: `text-[#6E7187] text-[0.6rem] font-medium tracing-[0.0125rem] flex`,
    infoIcon: `ml-1 my-auto`,
    radioIcon: `absolute right-[1.1rem] top-[1.1rem]`
  };


const BeneficiaryAccount = () => {
  return (
     <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Select Beneficiary Account</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.beneficiaryContainer}>
        <div className={styles.beneficiaryItem}>
            <div className={styles.titleContainer}>
            <div className={styles.title}>
                US Money Markets
            </div>
            <div className={styles.subTitle}>
                5.00%APY
            </div>
            </div>
            <input
            type="radio"
            id="radio1"
            name="radio-group"
            className="hidden"
          />
           <label htmlFor="radio1">
            <Image className={styles.radioIcon} src={radioIcon} alt="radio-icon" width={20} />
          </label>
          <div className={styles.bioContainer}>
            <div className={styles.bioText}>
            Current ECZ Borrow Rate: 2% APR
            <AiFillInfoCircle className={styles.infoIcon} size={15} color="white"/>
            </div>
            <div className={styles.bioText}>
            Min collateralisation ratio: 100%
            </div>
          </div>
        </div>
        <div className={styles.beneficiaryItem}>
            <div className={styles.titleContainer}>
            <div className={styles.titlesecondary}>
                US Certified Deposit
            </div>
            <div className={styles.subTitle}>
                5.75%APY
            </div>
            </div>
            <input
            type="radio"
            id="radio1"
            name="radio-group"
            className="hidden"
          />
           <label htmlFor="radio1">
            {/* <Image className={styles.radioIcon} src={radioIcon} alt="radio-icon" width={20} /> */}
          </label>
          <div className={styles.bioContainer}>
            <div className={styles.bioText}>
            Current ECZ Borrow Rate: 2% APR
            <AiFillInfoCircle className={styles.infoIcon} size={15} color="white"/>
            </div>
            <div className={styles.bioText}>
            Min collateralisation ratio: 100%
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BeneficiaryAccount