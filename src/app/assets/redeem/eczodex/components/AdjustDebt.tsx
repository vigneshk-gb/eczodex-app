import React from "react";
import Image from "next/image";

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  hr2: `w-full h-[1px] border-[#E4E3EB] px-[0.5rem] md:px-[1rem]`, 
  assetContainer: `w-full md:w-[45rem] h-auto flex flex-col gap-y-[1.5rem]`,
  assetActiveName: `font-semibold text-base text-[#110E2E]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto mt-[2rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  infoContainer: `w-full flex flex-col gap-y-[0.75rem] md:gap-y-[1rem]`,
  topSubCtn: `flex flex-col gap-y-[0.75rem] md:gap-y-[1rem]`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-[0.87rem] md:text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-[0.87rem] md:text-base text-[#2B8AC8] tracking-[0.025rem]`,
  limitAmountTwo: `font-bold text-[0.87rem] md:text-base text-[#F17E7E] tracking-[0.025rem]`,
  bottomContainer: `flex flex-col`,
  inputContainer: `flex flex-col mt-[1rem]`,
  inputCheckContainer: `flex mt-[1rem] md:items-end`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-[0.87rem] md:text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-base md:text-[1.5rem] text-clip`,
  assetName: `flex-1 text-[#2B8AC8] text-base md:text-[1.5rem] font-medium`,
  inputSelectWrapper: `w-full pr-[0.8rem] border-[#E4E3EB] overflow-hidden border-[1px] border-solid rounded-[0.5rem]`,
  inputSelectBox: `w-full py-[1.3rem] pl-[0.8rem] outline-none bg-transparent font-normal text-base md:text-[1.5rem] text-[#1E1E1E] cursor-pointer`,
  inputFirstOption: `font-normal text-base md:text-[1.5rem] text-[#DBDBDF] hidden`,
  inputOption: `font-normal text-base md:text-[1.5rem] text-[#1E1E1E]`,
  addWalletTxt: `text-base font-medium tracking-[0.025rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
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
            <div className={styles.inputTitleWrapper}>
              <div className={styles.inputTitle}>Select Wallet</div>
            </div>
            <div className={styles.inputSelectWrapper}>
              <select className={styles.inputSelectBox}>
                <option value="option1" className={styles.inputFirstOption}>
                  Lorem Ipsum
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
