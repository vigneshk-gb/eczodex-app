import React from "react";
import Image from "next/image";


import jpMorganIcon from "../../../../../../public/Icons/jp-morgan.svg"
import wellsFargoIcon from "../../../../../../public/Icons/wells-fargo.svg"
import boaIcon from "../../../../../../public/Icons/bank-of-america.svg"
import hsbcIcon from "../../../../../../public/Icons/hsbc.svg"
import barclays from "../../../../../../public/Icons/barclays.svg"
import plusIcon from "../../../../../../public/Icons/plus.svg"


const styles = {
  subHead: `w-100 h-auto mx-[2.81rem] mt-[2.5rem] mb-[1.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
  detailsContainer: `w-[29rem] h-auto mx-auto`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-base text-[#2B8AC8] tracking-[0.025rem]`,
  inputContainer: `flex flex-col mt-[0.8rem]`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  assetName: `text-[#2B8AC8] text-[1.3rem] font-medium`,
  inputSelectWrapper: `w-full px-[0.8rem] py-[0.8rem] border-[#E4E3EB] border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputSelectBox: `w-full outline-none font-medium text-[1.4rem] text-clip text-[#C3C3CA]`,
  inputFirstOption: `font-medium text-[1.4rem]`,
  inputOption: `font-medium text-[1.4rem] text-black`,
  transferFromBox: `w-full grid grid-cols-3 gap-[0.84rem]`,
  transferFromItem: `w-[9rem] h-fit border-box p-[0.34rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex flex-col items-center justify-center gap-[0.94rem]`,
  transferFromItemSecondary: `w-[9rem] h-fit p-[0.34rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex flex-col items-center justify-center gap-[0.94rem]`,
  itemIcon: `w-[2.81rem] h-[2.81rem]`,
  itemIconSecondary: `w-[2.81rem] h-[2.81rem] flex items-center justify-center`,
  itemBio: `flex flex-col gap[0.43rem] text-center`,
  itemTitle: `text-[#110E2E] text-[0.75rem] font-medium tracing-[0.018rem]`,
  itemTitleSecondary: `text-[#110E2E] text-[0.75rem] font-medium tracing-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  itemSubTitle: `text-[#6E7187] text-[0.5rem] font-medium tracing-[0.0125rem] uppercase`,
  infoBox: `w-full font-normal text-[1rem] tracking-[0.025rem] text-[#6E7187]  mt-[1.25rem]`,
};

const DepositCash = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Deposit Cash</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Transfer Method</div>
          </div>
          <div className={styles.inputSelectWrapper}>
            <select className={styles.inputSelectBox}>
              <option value="option1" className={styles.inputFirstOption}>
                Choose...
              </option>
              <option value="option2" className={styles.inputOption}>
                Option 2
              </option>
              <option value="option3" className={styles.inputOption}>
                Option 3
              </option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Transfer Method</div>
          </div>
          <div className={styles.transferFromBox}>
            <div className={styles.transferFromItem}>
              <div>
                <Image src={jpMorganIcon} alt="icon"/>
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
            <div className={styles.transferFromItem}>
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
            <div className={styles.transferFromItem}>
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
            <div className={styles.transferFromItem}>
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
            <div className={styles.transferFromItem}>
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
            <div className={styles.transferFromItemSecondary}>
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
  );
};

export default DepositCash;
