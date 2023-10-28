import React from "react";

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.85rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  detailsContainer: `w-full md:w-[35rem] h-auto mx-auto`,
  limitInfoBox: `flex gap-[0.25rem] mb-[1.5rem] md:mb-[2.5rem]`,
  limitText: `font-normal text-[0.85rem] md:text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-[0.85rem] md:text-base text-[#2B8AC8] tracking-[0.025rem]`,
  inputContainer: `flex flex-col mb-[1.25rem]`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-[0.85rem] md:text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  addWalletTxt: `text-base font-medium tracking-[0.025rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  inputBox: `w-full outline-none font-medium text-base md:text-[1.5rem] text-clip`,
  assetName: `flex-1 text-[#2B8AC8] text-base md:text-[1.5rem] font-medium`,
  amountSymbol: `flex-1 text-[#DBDBDF] text-base md:text-[1.5rem] font-medium`,
  inputSelectWrapper: `w-full pr-[0.8rem] border-[#E4E3EB] overflow-hidden border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem]`,
  inputSelectBox: `w-full py-[1.3rem] pl-[0.8rem] outline-none bg-transparent font-normal text-base md:text-[1.5rem] text-[#1E1E1E] cursor-pointer`,
  inputFirstOption: `font-normal text-base md:text-[1.5rem] text-[#DBDBDF] hidden`,
  inputOption: `font-normal text-base md:text-[1.5rem] text-[#1E1E1E]`,
  infoBox: `w-full font-normal text-[0.85rem] md:text-base tracking-[0.025rem] text-[#6E7187]  mt-[1.25rem]`,
};

const MintDetails = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Mint Details</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.limitInfoBox}>
          <div className={styles.limitText}>Available Credit Limit:</div>
          <div className={styles.limitAmount}>$1,000,000.00</div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Amount</div>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.amountSymbol}>$</span>
            <input type="number" className={styles.inputBox} />
            <span className={styles.assetName}>ECZ</span>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Target Wallet</div>
            <div className={styles.addWalletTxt}>+ Add Wallet</div>
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
        <div className={styles.limitInfoBox}>
          <div className={styles.limitText}>Collateral Debt Ceiling:</div>
          <div className={styles.limitAmount}>1 Billion USD</div>
        </div>
        <div className={styles.infoBox}>
          Please note vou will not be able to mint under the following
          circumstances: 1. If you exceed vour limits. 2. The amount borrowed
          exceeds the debt ceiling.
        </div>
      </div>
    </>
  );
};

export default MintDetails;
