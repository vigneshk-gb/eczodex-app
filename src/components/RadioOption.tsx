import React from "react";
import Image from "next/image";

import radioIcon from "../../public/Icons/radio-icon.svg";
import RadioGroup from "@/components/RadioGroup";

const styles = {
  assetContainer: `bg-red-500 w-full h-auto grid grid-cols-1 md:grid-cols-2  gap-[0.63rem] px-[1rem] md:px-[2.5rem]`,
  asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
  assetActiveName: `font-semibold text-base md:text-[1.25rem] text-[#110E2E]`,
  assetName: `font-normal text-base md:text-[1.25rem] text-[#110E2E]`,
  
};

interface OptionProps {
  index: number;
  selectedIndex?: number;
  onSelect: (index: number) => void;
  item: string;
}
const RadioOption = (props: OptionProps) => {
  const isSelected = props.index === props.selectedIndex;
  return (
    <div className={styles.asset} onClick={() => props.onSelect(props.index)}>
      <div className={isSelected ? styles.assetActiveName : styles.assetName}>{props.item}</div>
      {isSelected && <Image src={radioIcon} alt="radio-icon" width={20} />}
    </div>
  );
};

export default RadioOption;
