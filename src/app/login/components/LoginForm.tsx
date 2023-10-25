import React from "react";

const styles = {
  login: `w-full lg:w-1/2  h-screen bg-[#ffff] flex flex-col items-center justify-center px-[1rem] overflow-auto`,
  title: `text-center text-[1.5rem] md:text-[2.5rem] font-semibold mb-[2rem] md:mb-[2.5rem]`,
  inputWrapper: `w-full max-w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  inputBox: `w-full outline-none font-medium text-base text-clip placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187]`,
  subMenu: `w-full max-w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[0.87rem] md:text-base`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `w-full max-w-[28rem] flex gap-[0.62rem] justify-center`,
  subTextSec: `font-normal text-[0.87rem] md:text-base text-[#6E7187]`
};

const LoginForm = () => {
  return (
    <div className={styles.login}>
      <div className={styles.title}>Login</div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.inputBox}
          placeholder="Email or Username"
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="password"
          className={styles.inputBox}
          placeholder="Password"
        />
      </div>
      <div className={styles.subMenu}>
        <div className={styles.subText}>Forgot Password?</div>
      </div>
      <div className={styles.primaryBtn}>Login</div>
      <div className={styles.subMenuSec}>
        <div className={styles.subTextSec}>Don&rsquo;t have an account?</div>
        <div className={styles.subText}>Sign Up</div>
      </div>
    </div>
  );
};

export default LoginForm;
