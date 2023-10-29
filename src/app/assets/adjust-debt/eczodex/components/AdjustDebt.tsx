import React from "react";
import Image from "next/image";

const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  assetContainer: `w-full md:w-[40rem] h-auto flex flex-col`,
  bottomContainer: `w-full flex flex-col`,
  topSubCtn: `flex flex-col gap-y-[0.75rem] md:gap-y-[1rem]`,
  limitInfoBox: `flex gap-[0.25rem]`,
  limitText: `font-normal text-[0.87rem] md:text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-[0.87rem] md:text-base text-[#2B8AC8] tracking-[0.025rem]`,
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
  addressCtn: `w-full flex gap-[0.4rem] mt-[0.5rem] mb:mt-[1rem] mb-[1rem] md:mb-[1.5rem]`,
  addresstitle: `font-normal text-[0.75rem] md:text-base tracking-[0.025rem] text-[#110E2E] text-opacity-40 uppercase`,
  walletAddress: `font-normal text-[0.75rem] md:text-base tracking-[0.025rem] text-[#110E2E] uppercase`,
  termsContainer: `flex gap-[0.89rem] mt-auto ml-[0.4rem] mt-[0.94rem]`,
  termsText: `text-[1rem] font-normal text-[#110E2E] tracking-[0.025rem]`,
  checkboxInput:  `peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full 
  after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
  after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] focus:outline-none`
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
        <div className={styles.topSubCtn}>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Collateral Asset:</div>
            <div className={styles.limitAmount}>Cash</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Current Borrow Rate:</div>
            <div className={styles.limitAmount}>2%APR</div>
          </div>
          <div className={styles.limitInfoBox}>
            <div className={styles.limitText}>Min Collateral Ratio:</div>
            <div className={styles.limitAmount}>100%</div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitleWrapper}>
              <div className={styles.inputTitle}>Collateral Amount</div>
            </div>
            <div className={styles.inputWrapper}>
              <input type="number" className={styles.inputBox} />
              <div className={styles.assetName}>$</div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitleWrapper}>
              <div className={styles.inputTitle}>Amount Borrowed</div>
            </div>
            <div className={styles.inputWrapper}>
              <input type="number" className={styles.inputBox} />
              <div className={styles.assetName}>ECZ</div>
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
          <div className={styles.addressCtn}>
            <div className={styles.addresstitle}>Address:</div>
            <div className={styles.walletAddress}>0x7845F69A37CB9E0E7FBDE10B...8D55B0B691E</div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitleWrapper}>
              <div className={styles.inputTitle}>Amount to Redeem</div>
            </div>
            <div className={styles.inputWrapper}>
              <input type="number" className={styles.inputBox} />
              <div className={styles.assetName}>ECZ</div>
            </div>
          </div>
          <div className={styles.inputCheckContainer}>
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
      </div>
    </>
  );
};

export default AdjustDebt;
