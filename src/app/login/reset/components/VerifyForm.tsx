import React from "react";

const styles = {
  reset: `w-1/2  h-screen bg-[#ffff] flex flex-col items-center justify-center `,
  titleContainer: `flex flex-col gap-[0.4rem] mb-[2.5rem]`,
  title: `text-center text-[2rem] font-semibold`,
  subTitle: `text-center font-semibold leading-[1.4rem] text-[0.8rem] text-[#6E7187]`,
  inputContainer: `w-[28rem] flex justify-evenly items-center`,
  inputWrapper: `w-[3.5rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip placeholder:font-normal placeholder:text-[1rem] placeholder:text-[#6E7187]`,
  subMenu: `w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[1rem]`,
  primaryBtn: `w-[28rem] py-[1.21rem] mx-auto my-[1rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `flex gap-[0.62rem]`,
  subTextSec: `font-normal text-[1rem] text-[#6E7187]`,
};

const VerifyForm = () => {
  return (
    <div className={styles.reset}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Verify Your Email</div>
        <div className={styles.subTitle}>
        Check your email and enter the verification code to verify
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            inputMode="numeric"
            maxLength={1}
          />
        </div>
      </div>
      <div className={styles.primaryBtn}>Submit</div>
      <div className={styles.subMenuSec}>
        <div className={styles.subTextSec}>Sign in with another account?</div>
        <div className={styles.subText}>Sign Out</div>
      </div>
    </div>
  );
};

export default VerifyForm;
