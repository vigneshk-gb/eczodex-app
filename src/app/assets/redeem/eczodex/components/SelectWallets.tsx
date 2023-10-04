import React from "react";

const styles = {
  subHead: `w-100 h-auto mx-[2.81rem] my-[2.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
  detailsContainer: `w-[30rem] h-auto mx-auto`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-base text-[#2B8AC8] tracking-[0.025rem]`,
  inputContainer: `flex flex-col mt-[1rem]`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  addWalletTxt: `text-base font-medium tracking-[0.025rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip`,
  assetName: `text-[#2B8AC8] text-[1.3rem] font-medium`,
  inputSelectWrapper: `w-full px-[0.8rem] py-[1em] border-[#E4E3EB] border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputSelectBox: `w-full outline-none font-medium text-[1.4rem] text-clip text-[#C3C3CA]`,
  inputFirstOption: `font-medium text-[1.4rem]`,
  inputOption: `font-medium text-[1.4rem] text-black`,
  infoBox: `w-full font-normal text-[1rem] tracking-[0.025rem] text-[#6E7187]  mt-[1.25rem]`,
};

const SelectWallets = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Select Wallets</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Source Wallet</div>
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
      </div>
    </>
  );
};

export default SelectWallets;
