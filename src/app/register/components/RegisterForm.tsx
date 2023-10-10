import React from "react";

const styles = {
  register: `w-1/2  h-screen bg-[#ffff] flex flex-col items-center justify-center `,
  registerContainer: `w-[28rem] flex flex-col justify-center`,
  title: `text-center text-[2rem] font-semibold mb-[2.5rem]`,
  inputNameWrapper: `flex gap-[1rem]`,
  inputWrapper: `w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  inputBox: `w-full outline-none font-medium text-[1.5rem] text-clip placeholder:font-normal placeholder:text-[1rem] placeholder:text-[#6E7187]`,
  inputSelectWrapper: `w-full px-[0.8rem] py-[1.3rem] border-[#E4E3EB] border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputSelectBox: `w-full outline-none font-normal text-[1rem] text-clip text-[#6E7187]`,
  inputFirstOption: `font-normal text-[1rem] text-[#6E7187]`,
  inputOption: `font-normal text-[1rem] text-[#6E7187]`,
  subMenu: `w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[1rem]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto my-[1rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `flex gap-[0.62rem]`,
  subTextSec: `font-normal text-[1rem] text-[#6E7187]`,
};

const RegisterForm = () => {
  return (
    <div className={styles.register}>
      <div className={styles.title}>Create Your Account</div>
      <div className={styles.registerContainer}>
      <div className={styles.inputNameWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="First Name"
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <input type="email" className={styles.inputBox} placeholder="Email" />
      </div>
      <div className={styles.inputSelectWrapper}>
        <select className={styles.inputSelectBox}>
          <option value="option1" className={styles.inputFirstOption}>
            Customer Type
          </option>
          <option value="option2" className={styles.inputOption}>
            Option 2
          </option>
          <option value="option3" className={styles.inputOption}>
            Option 3
          </option>
        </select>
      </div>
      <div className={styles.inputSelectWrapper}>
        <select className={styles.inputSelectBox}>
          <option value="option1" className={styles.inputFirstOption}>
            United States
          </option>
          <option value="option2" className={styles.inputOption}>
            Option 2
          </option>
          <option value="option3" className={styles.inputOption}>
            Option 3
          </option>
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="password"
          className={styles.inputBox}
          placeholder="Password"
        />
      </div>
      </div>
      <div className={styles.primaryBtn}>Create Account</div>
      <div className={styles.subMenuSec}>
        <div className={styles.subTextSec}>Already have an account?</div>
        <div className={styles.subText}>Login</div>
      </div>
    </div>
  );
};

export default RegisterForm;
