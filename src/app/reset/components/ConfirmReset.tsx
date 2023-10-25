"use client"
import React, {useState} from "react";
import OtpInput from "@/components/OtpInput";


const styles = {
  reset: `w-full lg:w-1/2 h-screen bg-[#ffff] flex flex-col items-center justify-center px-[1rem] overflow-auto`,
  titleContainer: `flex flex-col gap-[0.4rem] mb-[2rem] md:mb-[2.5rem]`,
  title: `text-center text-[1.5rem] md:text-[2.5rem] font-semibold`,
  subTitle: `text-center font-semibold leading-[1.4rem] text-[0.8rem] md:text-base text-[#6E7187]`,
  inputContainer: `w-full max-w-[28rem] flex justify-evenly items-center gap-[0.5rem]`,
  inputBox: `w-full max-w-[3.4rem] h-[3.3rem] md:w-[4.3rem] md:h-[4.4rem] outline-none font-medium text-[1.5rem] md:text-[2rem] text-clip placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187] text-center border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem]`,
  subMenu: `w-full max-w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[0.87rem] md:text-base`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `w-full max-w-[28rem] flex gap-[0.62rem] justify-center`,
  subTextSec: `font-normal text-[0.87rem] md:text-base text-[#6E7187]`
};

const ConfirmReset = () => {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);
  return (
    <div className={styles.reset}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Confirm Reset</div>
        <div className={styles.subTitle}>
          Enter the 6-digit code displayed in your authenticator app
        </div>
      </div>
      <OtpInput value={otp} valueLength={6} onChange={onChange}/>
      <div className={styles.primaryBtn}>Confirm Password Reset</div>
      <div className={styles.subMenuSec}>
        <div className={styles.subText}>Back to Sign In</div>
      </div>
    </div>
  );
};

export default ConfirmReset;
