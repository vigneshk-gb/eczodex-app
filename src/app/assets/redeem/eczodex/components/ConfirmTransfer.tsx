import React from "react";



const styles = {
  subHead: `w-full h-auto mx-[2.81rem] my-[1.5rem] md:my-[2.5rem] flex items-center justify-evenly px-[1rem] md:px-[2.5rem]`,
  hr: `flex-1 h-[1px] border-[#E4E3EB]`,
  subHeadText: `text-[0.87rem] md:text-[1.25rem] font-medium text-[#6E7187] text-center mx-[1rem] md:mx-[2rem]`,
  hr2: `w-full h-[1px] border-[#E4E3EB] px-[0.5rem] md:px-[1rem]`, 
  transferContainer: `w-full h-auto mx-auto flex flex-col justify-evenly items-center gap-[1rem] px-[1rem] md:px-[2.5rem]`,
  topContainer: `w-full flex-col flex justify-center items-center gap-y-[1.5rem] gap-x-[2.5rem] `,
  limitInfoBox: `flex flex-col justify-center items-center gap-[0.25rem]`,
  limitText: `font-normal text-[0.87rem] md:text-base text-[#6E7187] tracking-[0.025rem]`,
  limitAmount: `font-bold text-base md:text-[1.5rem] text-[#2B8AC8] tracking-[0.025rem]`,
  inputContainer: `flex flex-col mt-[1rem]`,
  inputCheckContainer: `flex mt-[1rem] md:items-end`,
  inputTitleWrapper: `flex items-center justify-between`,
  inputTitle: `font-normal text-[0.87rem] md:text-base text-[#110E2E] tracking-[0.025rem] mb-[0.94rem]`,
  inputWrapper: `w-full p-[0.8rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-base md:text-[1.5rem] text-clip`,
  assetName: `flex-1 text-[#2B8AC8] text-base md:text-[1.5rem] font-medium`,
  amountSymbol: `flex-1 text-[#DBDBDF] text-base md:text-[1.5rem] font-medium`,
  bottomContainer: `w-full grid grid-cols-1 md:grid-cols-2 gap-x-[0.4rem]`,
  termsContainer: `flex items-center gap-[0.89rem]`,
  termsText: `text-[1rem] font-normal text-[#110E2E] tracking-[0.025rem]`,
  checkboxInput:  `peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full 
  after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
  after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] focus:outline-none`
};

const  ConfirmTransfer = () => {
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
            <div className={styles.inputTitle}>Amount</div>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.amountSymbol}>$</span>
            <input type="number" className={styles.inputBox} />
            <span className={styles.assetName}>ECZ</span>
          </div>
        </div>
          <hr className={styles.hr2} />
        </div>
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

export default ConfirmTransfer;
