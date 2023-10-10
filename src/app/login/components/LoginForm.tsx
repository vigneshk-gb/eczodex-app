import React from "react";

const styles = {
  login: `w-1/2  h-screen bg-[#ffff] flex flex-col items-center justify-center `,
  title: `text-center text-[2rem] font-semibold mb-[2.5rem]`,
  inputWrapper: `w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip placeholder:font-normal placeholder:text-[1rem] placeholder:text-[#6E7187]`,
  subMenu: `w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[1rem]`,
  primaryBtn: `w-[28rem] py-[1.21rem] mx-auto my-[1rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `flex gap-[0.62rem]`,
  subTextSec: `font-normal text-[1rem] text-[#6E7187]`

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
