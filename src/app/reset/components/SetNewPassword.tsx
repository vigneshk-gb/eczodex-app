"use client";
import React, { useEffect, useState } from "react";
import { HiMiniEye } from "react-icons/hi2";
import { HiMiniEyeSlash } from "react-icons/hi2";

import { toast } from "react-toastify";
const styles = {
  reset: `w-full lg:w-1/2 h-screen bg-[#ffff] flex flex-col items-center justify-center px-[1rem] overflow-auto`,
  resetContainer: `w-full max-w-[28rem] flex flex-col justify-center gap-y-[1.25rem]`,
  title: `text-center text-[1.5rem] md:text-[2.5rem] font-semibold mb-[2rem] md:mb-[2.5rem]`,
  inputNameWrapper: `flex max-sm:flex-col gap-x-[1rem]`,
  inputWrapper: `w-full max-w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem] mb-[1rem]`,
  passwordInputWrapper: `w-full max-w-[28rem] px-[0.8rem] py-[1rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-base text-clip placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187]`,
  inputSelectWrapper: `relative w-full max-w-[28rem] pr-[0.8rem] border-[#E4E3EB] overflow-hidden border-[1px] mb-[1.25rem] border-solid rounded-[0.5rem]`,
  inputSelectBox: `w-full py-[1.3rem] pl-[0.8rem] outline-none bg-transparent font-normal text-base text-[#1E1E1E] cursor-pointer`,
  inputFirstOption: `font-normal text-base text-[#1E1E1E] hidden`,
  inputOption: `font-normal text-base text-[#1E1E1E]`,
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
  subMenu: `w-full max-w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[0.87rem] md:text-base`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
  subMenuSec: `w-full max-w-[28rem] flex gap-[0.62rem] justify-center`,
  subTextSec: `font-normal text-[0.87rem] md:text-base text-[#6E7187]`,
};

const SetNewPassword = () => {
  const [userInfo, setuserInfo] = useState({
    password: ``,
  });
  const [isStrength, setStrength] = useState<string | null>(null);
  const [isError, setError] = useState<string | null>(null);
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState<boolean>(false);
  const [isMatch, setIsMatch] = useState<boolean>(false);

  const passwordStrengthChecker = (password: string) => {
    let score = 0;
    let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    regexPositive.forEach((regex, index) => {
      if (new RegExp(regex).test(password)) {
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

  const handleMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    setRepeatPassword(password);
    
    if (userInfo.password.length > 0 && userInfo.password === password){
      setIsMatch(true)
      return
    }else {
      setIsMatch(false)
      return
    }
  }


  return (
    <div className={styles.reset}>
      <div className={styles.title}>Set New Password</div>
      <div className={styles.resetContainer}>
        <div className={styles.passwordContainer}>
          <div className={styles.passwordInputWrapper}>
            <input
              type={isNewPasswordVisible ? "text" : "password"}
              className={styles.inputBox}
              placeholder="Enter New Password"
              onChange={(e) => handleChangePassword(e)}
            />
            {isNewPasswordVisible ? (
              <HiMiniEye
                size={20}
                color="6E7187"
                onClick={() => {
                  setIsNewPasswordVisible(false);
                }}
              />
            ) : (
              <HiMiniEyeSlash
                size={20}
                color="6E7187"
                onClick={() => {
                  setIsNewPasswordVisible(true);
                }}
              />
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
        <div className={styles.passwordContainer}>
          <div className={styles.passwordInputWrapper}>
            <input
              type={isRepeatPasswordVisible ? "text" : "password"}
              className={styles.inputBox}
              placeholder="Repeat Password"
              onChange={(e) => handleMatchPassword(e)}
            />
            {isRepeatPasswordVisible ? (
              <HiMiniEye
                size={20}
                color="6E7187"
                onClick={() => {
                  setIsRepeatPasswordVisible(false);
                }}
              />
            ) : (
              <HiMiniEyeSlash
                size={20}
                color="6E7187"
                onClick={() => {
                  setIsRepeatPasswordVisible(true);
                }}
              />
            )}
          </div>
          {repeatPassword?.length > 0 && (
            <div className={styles.indicatorContainer}>
              {!isMatch && (
                <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItemWeak}></div>
                  <div className={styles.indicatorBoxItemWeak}></div>
                  <div className={styles.indicatorBoxItemWeak}></div>
                </div>
              )}
              {isMatch && (
                <div className={styles.indicatorBox}>
                  <div className={styles.indicatorBoxItemStrong}></div>
                  <div className={styles.indicatorBoxItemStrong}></div>
                  <div className={styles.indicatorBoxItemStrong}></div>
                </div>
              )}
              {!isMatch && (
                <div className={styles.indicatorTxtWeak}>Password don&apos;t Match</div>
              )}
              {isMatch && (
                <div className={styles.indicatorTxtStrong}>Password Match</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.primaryBtn}>Submit</div>
      <div className={styles.subMenuSec}>
        <div className={styles.subText}>Back to Sign In</div>
      </div>
    </div>
  );
};

export default SetNewPassword;
