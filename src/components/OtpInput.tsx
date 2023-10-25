import React, { useMemo } from "react";
import { RE_DIGIT } from "../utils/constants";


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
  subTextSec: `font-normal text-[0.87rem] md:text-base text-[#6E7187]`,
};

type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const OtpInput = ({ value, valueLength, onChange }: Props) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for(let i = 0; i<valueLength; i++) {
        const char = valueArray[i];
        const re = new RegExp(/^\d+$/);

        if(RE_DIGIT.test(char)){
            items.push(char)
        }else{
            items.push('')
        }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const target = e.target;
    const targetValue = target.value;

    if(!RE_DIGIT.test(targetValue)){
        return;
    }

    const newValue = value.substring(0, index) + targetValue + value.substring(index + 1)
    onChange(newValue);

    // const nextElementSibling
  }

  return (
    <div className={styles.inputContainer}>
      {valueItems.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={6}
          className={styles.inputBox}
          value={digit}
          onChange={(e) => inputOnChange(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;