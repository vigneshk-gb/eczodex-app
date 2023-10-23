"use client";
import React, { useEffect, useState } from "react";
import { HiMiniEye } from "react-icons/hi2";
import { HiMiniEyeSlash } from "react-icons/hi2";

import { toast } from "react-toastify";

const styles = {
  register: `w-1/2  h-screen bg-[#ffff] flex flex-col items-center justify-center `,
  registerContainer: `w-[28rem] flex flex-col justify-center`,
  title: `text-center text-[2rem] font-semibold mb-[2.5rem]`,
  inputNameWrapper: `flex gap-[1rem]`,
  inputWrapper: `w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  passwordInputWrapper: `w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-base text-clip placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187]`,
  inputSelectWrapper: `w-full px-[0.8rem] py-[1.3rem] border-[#E4E3EB] border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputSelectBox: `w-full outline-none font-normal text-[1rem] text-clip text-[#6E7187]`,
  inputFirstOption: `font-normal text-[1rem] text-[#6E7187]`,
  inputOption: `font-normal text-[1rem] text-[#6E7187]`,
  passwordContainer: `flex flex-col gap-[0.1rem]`,
  indicatorContainer: `flex gap-[0.75rem] items-center`,
  indicatorBox: `flex gap-[0.12rem]`,
  showHide: `w-[20px]`,
  indicatorBoxItem: `w-[4.29rem] h-[0.18rem] rounded-[0.62rem] bg-[#E4E3EB]`,
  indicatorBoxItemWeak: `w-[4.29rem] h-[0.18rem] rounded-[0.62rem] bg-[#F17E7E]`,
  indicatorBoxItemModerate: `w-[4.29rem] h-[0.18rem] rounded-[0.62rem] bg-[#D1CA7B]`,
  indicatorBoxItemStrong: `w-[4.29rem] h-[0.18rem] rounded-[0.62rem] bg-[#7FD7A4]`,
  indicatorTxtNull: `text-[0.62rem] text-[#F17E7E] uppercase font-medium leading-[0.87rem] text-transparent`,
  indicatorTxtWeak: `text-[0.62rem] text-[#F17E7E] uppercase font-medium leading-[0.87rem]`,
  indicatorTxtModerate: `text-[0.62rem] text-[#D1CA7B] uppercase font-medium leading-[0.87rem]`,
  indicatorTxtStrong: `text-[0.62rem] text-[#7FD7A4] uppercase font-medium leading-[0.87rem]`,
  subMenu: `w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[1rem]`,
  primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto my-[1rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `flex gap-[0.62rem]`,
  subTextSec: `font-normal text-[1rem] text-[#6E7187]`,
};

const RegisterForm = () => {
  const [userInfo, setuserInfo] = useState({
    password: ``,
  });
  const [isStrength, setStrength] = useState<string | null>(null);
  const [isError, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const passwordStrengthChecker = (password: string) => {
    let score = 0;
    let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    regexPositive.forEach((regex, index) => {
      if (new RegExp(regex).test(password)) {
        console.log(score, "score ✅");
        score += 1;
      }
    });

    if (score === 0) {
      setStrength(null);
      return;
    } else if (score === 1) {
      setStrength("Weak");
      return;
    } else if (score === 2) {
      setStrength("Weak");
      return;
    } else if (score === 3) {
      setStrength("Moderate");
      return;
    } else if (score === 4) {
      setStrength("Strong");
      return;
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    setuserInfo({
      ...userInfo,
      password: e.target.value,
    });
    setError(null);
    passwordStrengthChecker(password);
    let capsCount, smallCount, numberCount, symbolCount;
    if (password.length < 4) {
      setError(
        "Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &"
      );
      return;
    } else {
      capsCount = (password.match(/[A-Z]/g) || []).length;
      smallCount = (password.match(/[a-z]/g) || []).length;
      numberCount = (password.match(/[0-9]/g) || []).length;
      symbolCount = (password.match(/\W/g) || []).length;
      if (capsCount < 1) {
        setError("Must contain one UPPERCASE letter");
        return;
      } else if (smallCount < 1) {
        setError("Must contain one lowercase letter");
        return;
      } else if (numberCount < 1) {
        setError("Must contain one number");
        return;
      } else if (symbolCount < 1) {
        setError("Must contain one special character: @$! % * ? &");
        return;
      }
    }
  };

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
        <div className={styles.passwordContainer}>
          <div className={styles.passwordInputWrapper}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              className={styles.inputBox}
              placeholder="Password"
              onChange={(e) => handleChangePassword(e)}
            />
            {isPasswordVisible ? (
              <HiMiniEye size={20} color="6E7187" onClick={() => {setIsPasswordVisible(false)}}/>
            ):(
              <HiMiniEyeSlash size={20} color="6E7187" onClick={() => {setIsPasswordVisible(true)}}/>
            )}
          </div>
          {userInfo.password.length > 0 && (
            <div className={styles.indicatorContainer}>
            {isStrength === null && (
                  <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItem}></div>
                  <div className={styles.indicatorBoxItem}></div>
                  <div className={styles.indicatorBoxItem}></div>
                </div>
            )}
            {isStrength === "Weak" && (
                  <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItemWeak}></div>
                  <div className={styles.indicatorBoxItem}></div>
                  <div className={styles.indicatorBoxItem}></div>
                </div>
            )}
            {isStrength === "Moderate" && (
                  <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItemModerate}></div>
                  <div className={styles.indicatorBoxItemModerate}></div>
                  <div className={styles.indicatorBoxItem}></div>
                </div>
            )}
            {isStrength === "Strong" && (
                  <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItemStrong}></div>
                  <div className={styles.indicatorBoxItemStrong}></div>
                  <div className={styles.indicatorBoxItemStrong}></div>
                </div>
            )}
            {isStrength === null && (
              <div className={styles.indicatorTxtNull}>Null</div>
            )}
            {isStrength === "Weak" && (
              <div className={styles.indicatorTxtWeak}>Weak</div>
            )}
            {isStrength === "Moderate" && (
              <div className={styles.indicatorTxtModerate}>Moderate</div>
            )}
            {isStrength === "Strong" && (
              <div className={styles.indicatorTxtStrong}>Strong</div>
            )}
          </div>
          )}
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
