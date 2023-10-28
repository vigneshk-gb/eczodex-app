import React, { useEffect, useState } from "react";
import RadioOption from "./RadioOption";

interface IProps {
  options: string[];
  onChange?: (selectedIndex: number) => void;
}
const styles = {
  assetContainer: `w-full h-auto grid grid-cols-1 md:grid-cols-2  gap-[0.63rem] px-[1rem] md:px-[2.5rem]`,
};

const RadioGroup = ({ options, onChange }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onSelect(index: number) {
    setSelectedIndex(index);
    onChange && onChange(index);
  }

  return (
    <div className={styles.assetContainer}>
      {options.map((el, index) => (
        <RadioOption
          key={index}
          index={index}
          selectedIndex={selectedIndex}
          onSelect={(index) => onSelect(index)}
          item={el}
        />
      ))}
    </div>
  );
};
export default RadioGroup;
