import React from "react";
import Image from "next/image";

import radioIcon from "../../../../../../public/Icons/radio-icon.svg";

const styles = {
  subHead: `w-100 h-auto mx-[2.81rem] my-[2.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-[500] text-[#6E7187] text-center`,
  assetContainer: `w-full h-auto px-[2.81rem] grid grid-cols-2  gap-[0.63rem] `,
  asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
  assetActiveName: `font-semibold text-base text-[#110E2E]`,
  assetName: `font-medium text-base text-[#110E2E]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto mt-[2rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
};



const SelectType = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Select Adjustment Type</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.assetContainer}>
        <div className={styles.asset}>
          <div className={styles.assetName}>Collateral</div>
          <input
            type="radio"
            id="radio1"
            name="radio-group"
            className="hidden"
          />
          <label htmlFor="radio1">
            {/* <Image src={radioIcon} alt="radio-icon" width={20} /> */}
          </label>
        </div>
        <div className={styles.asset}>
          <div className={styles.assetActiveName}>Debt</div>
          <input
            type="radio"
            id="radio1"
            name="radio-group"
            className="hidden"
          />
          <label htmlFor="radio1">
            <Image src={radioIcon} alt="radio-icon" width={20} />
          </label>
        </div>
      </div>
    </>
  )
}

export default SelectType