import React from "react";
import Image from "next/image";

import radioIcon from "../../../../../../public/Icons/radio-icon.svg";
import RadioGroup from "@/components/RadioGroup";

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  assetContainer: `w-full h-auto grid grid-cols-1 md:grid-cols-2  gap-[0.63rem] px-[0.5rem] md:px-[1rem]`,
  asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
  assetActiveName: `font-semibold text-base md:text-[1.25rem] text-[#110E2E]`,
  assetName: `font-normal text-base md:text-[1.25rem] text-[#110E2E]`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
};

const SelectAsset = () => {
  const itemList = [
    "Cash",
    "Treasuries",
    "Stocks",
    "Corporate Bonds",
    "Crypto",
    "Fixed Assets",
    "Asset Basket",
  ];
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Select Collateral Asset</div>
        <hr className={styles.hr} />
      </div>
      <RadioGroup options={itemList}/>
    </>
  );
};

export default SelectAsset;
