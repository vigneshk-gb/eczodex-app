import React from "react";



const styles = {
  subHead: `w-[90%] h-auto mx-[2.81rem] mt-[2.5rem] mb-[1.5rem] flex items-center justify-center`,
  hr: `w-full h-[1px] border-[#E4E3EB]`,
  hr2: `w-[90%] mx-[2.81rem] my-[1.5rem] h-[1px] border-[#E4E3EB]`,
  subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
  transferContainer: `w-fit h-auto mx-auto flex flex-col justify-evenly items-center gap-[1rem]`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-base text-[#2B8AC8] tracking-[0.025rem]`,
  inputContainer: `flex flex-col mt-[1rem]`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip`,
  assetName: `text-[#2B8AC8] text-[1.3rem] font-medium`,
  topContainer: `w-full flex items-end gap-[2.8rem]`,
  topSubCtn: `flex flex-col`,
  bottomContainer: `grid grid-cols-2 gap-[0.4rem]`,
  termsContainer: `flex gap-[0.89rem] mt-auto ml-[0.4rem]`,
  termsText: `text-[1rem] font-normal text-[#110E2E] tracking-[0.025rem]`,
  checkboxInput:  `appearance-none w-5 h-5 border rounded-sm focus:outline-none 
  checked:bg-[url('../../public/Icons/checkbox.svg')]`
};

const ConfirmTransfer = () => {
  return (
    <>
      <div className={styles.subHead}>
        <hr className={styles.hr} />
        <div className={styles.subHeadText}>Confirm Transfer</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.transferContainer}>
        <div className={styles.topContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitleWrapper}>
              <div className={styles.inputTitle}>Amount to Redeem</div>
            </div>
            <div className={styles.inputWrapper}>
              <input type="number" className={styles.inputBox} />
              <div className={styles.assetName}>ECZ</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr2} />
      <div className={styles.bottomContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>
            Customer Account Currency
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Customer Account Name</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Customer Account No.</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Customer Address</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Routing No.</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Bank Name</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputTitleWrapper}>
            <div className={styles.inputTitle}>Reference</div>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" className={styles.inputBox} />
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

export default ConfirmTransfer;
