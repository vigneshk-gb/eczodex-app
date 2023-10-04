import React from "react";
import Image from "next/image";

const styles = {
  subHead: `w-full h-auto px-[2.81rem] my-[2.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  hr2: `w-[100%] my-[1.5rem] h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-[500] text-[#6E7187] text-center`,
  assetContainer: `w-[70%] h-auto  flex flex-col gap-[0.63rem]`,
  assetActiveName: `font-semibold text-base text-[#110E2E]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto mt-[2rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  infoContainer: `flex flex-col gap-[0.5rem]`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-base text-[#2B8AC8] tracking-[0.025rem]`,
  limitAmountTwo: `font-bold text-base text-[#F17E7E] tracking-[0.025rem]`,
  bottomContainer: `flex flex-col`,
  inputContainer: `flex flex-col mt-[1rem]`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  addWalletTxt: `text-base font-medium tracking-[0.025rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip`,
  assetName: `text-[#2B8AC8] text-[1.3rem] font-medium`,
  termsContainer: `flex gap-[0.89rem] mt-auto ml-[0.4rem] mt-[0.94rem]`,
  termsText: `text-[1rem] font-normal text-[#110E2E] tracking-[0.025rem]`,
  checkboxInput: `appearance-none w-5 h-5 border rounded-sm focus:outline-none 
  checked:bg-[url('../../public/Icons/checkbox.svg')]`,
};

const AdjustDebt = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Adjust Debt</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.assetContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Collateral Asset:</div>
            <div className={styles.limitAmount}>Cash</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Current Borrow Rate:</div>
            <div className={styles.limitAmount}>2%APR</div>
          </div>
        </div>
        <hr className={styles.hr2} />
        <div className={styles.infoContainer}>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>
              Total Interest Charged for Eczodex Stablecoin:
            </div>
            <div className={styles.limitAmountTwo}>$2,000.00</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>
              Interest Earned on Collateral:
            </div>
            <div className={styles.limitAmount}>$5,000.00</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Net Gain:</div>
            <div className={styles.limitAmount}>$3,000.00</div>
          </div>
        </div>
        <hr className={styles.hr2} />
        <div className={styles.infoContainer}>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Collateral Amount:</div>
            <div className={styles.limitAmount}>$52,500.00</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Amount Borrowed:</div>
            <div className={styles.limitAmount}>50,000.00 ECZ</div>
          </div>
        </div>
        <hr className={styles.hr2} />
        <div className={styles.infoContainer}>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Amount to Redeem:</div>
            <div className={styles.limitAmount}>50,000.00 ECZ</div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.termsContainer}>
            <input
              type="checkbox"
              id="custom-checkbox"
              className={styles.checkboxInput}
            />
            <label htmlFor="custom-checkbox" className={styles.termsText}>
              I confirm the transfer details are correct.
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdjustDebt;
