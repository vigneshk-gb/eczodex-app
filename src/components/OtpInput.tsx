import React, { useMemo } from "react";
import { RE_DIGIT } from "../utils/constants";

const styles = {
  inputContainer: `w-full max-w-[28rem] flex justify-evenly items-center gap-[0.5rem]`,
  inputBox: `w-full max-w-[3.4rem] h-[3.3rem] md:w-[4.3rem] md:h-[4.4rem] outline-none font-medium text-[1.5rem] md:text-[2rem] text-clip placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187] text-center border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem]`,
};

type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const OtpInput = ({ value, valueLength, onChange }: Props) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      const re = new RegExp(/^\d+$/);

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const focusOnNextInput = (target: HTMLInputElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const focusOnPreviousInput = (target: HTMLInputElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);
      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusOnNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusOnNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusOnPreviousInput(target);
    }

    target.setSelectionRange(0, targetValue.length);

    if (key !== "Backspace" || targetValue !== "") {
      return;
    }

    focusOnPreviousInput(target);
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className={styles.inputContainer}>
      {valueItems.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className={styles.inputBox}
          value={digit}
          onChange={(e) => inputOnChange(e, index)}
          onKeyDown={inputKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
};

export default OtpInput;
