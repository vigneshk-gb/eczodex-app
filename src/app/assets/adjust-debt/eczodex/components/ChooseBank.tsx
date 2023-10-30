"use client";
"use client";
import React, { useState } from "react";
import Image from "next/image";

import jpMorganIcon from "../../../../../../public/Icons/jp-morgan.svg"
import wellsFargoIcon from "../../../../../../public/Icons/wells-fargo.svg"
import boaIcon from "../../../../../../public/Icons/bank-of-america.svg"
import hsbcIcon from "../../../../../../public/Icons/hsbc.svg"
import barclays from "../../../../../../public/Icons/barclays.svg"
import plusIcon from "../../../../../../public/Icons/plus.svg"

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  depositContainer: `w-full md:w-[35rem] h-auto mx-auto px-[0.5rem] md:px-[1rem]`,
    inputContainer: `flex flex-col mt-[0.8rem]`,
    inputTitleWrapper: `flex items-center justify-between`,
    inputTitle: `font-normal text-[0.87rem] md:text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
    assetName: `text-[#2B8AC8] text-[1.3rem] font-medium`,
    inputSelectWrapper: `w-full px-[0.8rem] py-[0.8rem] border-[#E4E3EB] border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
    inputSelectBox: `w-full outline-none font-medium text-[1.4rem] text-clip text-[#C3C3CA]`,
    inputFirstOption: `font-medium text-[1.4rem]`,
    inputOption: `font-medium text-[1.4rem] text-black`,
    transferFromBox: `w-full grid grid-cols-2 md:grid-cols-3 gap-[0.84rem]`,
    transferFromItem: `w-auto h-fit border-box p-[0.34rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex md:flex-col items-center justify-evenly md:justify-center md:gap-[0.94rem]`,
    transferFromItemActive: `w-auto h-fit p-[0.34rem] bg-[#449ECF] bg-opacity-5 border-[#449ECF] border-[1px] border-solid rounded-[0.5rem] flex md:flex-col items-center justify-evenly md:justify-center gap-[0.94rem]`,
    itemIcon: `w-[2.81rem] h-[2.81rem]`,
    itemIconSecondary: `w-[2.81rem] h-[2.81rem] flex items-center justify-center`,
    itemBio: `flex flex-col gap[0.43rem] text-center`,
    itemTitle: `text-[#110E2E] text-[0.75rem] font-medium tracing-[0.018rem]`,
    itemTitleSecondary: `text-[#110E2E] text-[0.75rem] font-medium tracing-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
    itemSubTitle: `text-[#6E7187] text-[0.5rem] font-medium tracing-[0.0125rem] uppercase`,
    infoBox: `w-full font-normal text-[1rem] tracking-[0.025rem] text-[#6E7187]  mt-[1.25rem]`,
  };

const ChooseBank = () => {
  const [selectedBank, setSelectedBank] = useState<string>('add-new');
  return (
     <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Choose Bank Account</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.depositContainer}>
      <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Transfer From</div>
          </div>
          <div className={styles.transferFromBox}>
            <div className={selectedBank === 'jp-morgan' ? styles.transferFromItemActive :styles.transferFromItem} onClick={() => setSelectedBank('jp-morgan')}>
              <div>
                <Image src={jpMorganIcon} alt="icon" />
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitle}>
                  JP Morgan
                </div>
                <div className={styles.itemSubTitle}>
                  Bank
                </div>
              </div>
            </div>
            <div className={selectedBank === 'wells-fargo' ? styles.transferFromItemActive :styles.transferFromItem}  onClick={() => setSelectedBank('wells-fargo')}>
              <div>
                <Image src={wellsFargoIcon} alt="icon"/>
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitle}>
                  Wells Fargo
                </div>
                <div className={styles.itemSubTitle}>
                  Bank
                </div>
              </div>
            </div>
            <div className={selectedBank === 'boa' ? styles.transferFromItemActive :styles.transferFromItem} onClick={() => setSelectedBank('boa')}>
              <div>
                <Image src={boaIcon} alt="icon"/>
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitle}>
                  Bank Of America
                </div>
                <div className={styles.itemSubTitle}>
                  Bank
                </div>
              </div>
            </div>
            <div className={selectedBank === 'hsbc' ? styles.transferFromItemActive :styles.transferFromItem} onClick={() => setSelectedBank('hsbc')}>
              <div>
                <Image src={hsbcIcon} alt="icon"/>
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitle}>
                  HSBC
                </div>
                <div className={styles.itemSubTitle}>
                  Bank
                </div>
              </div>
            </div>
            <div className={selectedBank === 'barclays' ? styles.transferFromItemActive :styles.transferFromItem} onClick={() => setSelectedBank('barclays')}>
              <div>
                <Image src={barclays} alt="icon"/>
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitle}>
                  Barclays
                </div>
                <div className={styles.itemSubTitle}>
                  Bank
                </div>
              </div>
            </div>
            <div className={selectedBank === 'add-new' ? styles.transferFromItemActive :styles.transferFromItem} onClick={() => setSelectedBank('add-new')}>
              <div className={styles.itemIconSecondary}>
                <Image src={plusIcon} alt="icon"/>
              </div>
              <div className={styles.itemBio}>
                <div className={styles.itemTitleSecondary}>
                  Add New
                </div>
                <div className={styles.itemSubTitle}>
                  Add New Bank
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseBank