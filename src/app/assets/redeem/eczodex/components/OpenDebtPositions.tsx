import React from "react";

const styles = {
    openDebt: `bg-gray-500 w-[73rem] min-h-[56rem] h-fit bg-[#ffff] rounded-[1rem] self-center mx-auto overflow-hidden flex flex-col justify-between`,
    dashContainer: `w-full h-[15rem] bg-red-500`,
    listContainer: `w-full h-[50rem] bg-[#ffff] border-[#E4E3EB] border-[1px] border-solid`,
    headContainer: `flex`, 
    prevNavLogo: `absolute w-[3.81rem] h-[3.81rem]`,
    titleContainer: `mx-auto`,
    subTitle: `text-[#6E7187] font-normal text-base leading-normal capitalize text-center`,
    title: `text-[#110E2E] font-medium text-[2rem] leading-normal capitalize text-center tracking-[0.05rem]`,
    mintBox: `w-[51.56rem] h-fit pb-[2.5rem] mt-[2rem] mx-auto rounded-[1rem] border-[#E4E3EB] border-[1px] border-solid overflow-hidden flex flex-col items-center`,
    menuContainer: `w-full h-fit flex border-box`,
    menuItem: `basis-1/4 bg-[#ffff] p-[1rem] border-[#E4E3EB] border-r-[1px] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#6E7187]`,
    activeMenuItem: `basis-1/4 bg-[#2B8AC8] p-[1rem] border-[#E4E3EB] border-r-[1px] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#ffff]`,
    menuItemL: `basis-1/4 bg-[#ffff] p-[1rem] border-[#E4E3EB] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#6E7187]`,
    activeMenuItemL: `basis-1/4 bg-[#2B8AC8] p-[1rem] border-[#E4E3EB] border-b-[1px] border-solid text-center text-[0.8rem] font-[400] tracking-[0.1rem] uppercase text-[#ffff]`,
    subHead: `w-100 h-auto mx-[2.81rem] my-[2.5rem] flex items-center justify-center`,
    hr: `w-full h-[1px] border-[#E4E3EB]`,
    subHeadText: `w-[33.25rem] h-[1.56rem] text-base font-medium text-[#6E7187] text-center`,
    assetContainer: `w-full h-auto px-[2.81rem] grid grid-cols-2  gap-[0.63rem] `,
    asset: `w-[1/2] h-[4.25rem] border-[#E4E3EB] border-[1px] border-solid rounded-[1rem] flex items-center justify-between px-[1.56rem] py-[1.69rem]`,
    assetActiveName: `font-semibold text-base text-[#110E2E]`,
    assetName: `font-medium text-base text-[#110E2E]`,
    primaryBtn: `w-[28.37rem] py-[1.21rem] mx-auto mt-[2rem] text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
    exitBtn: `font-bold text-[1rem] text-[#2B8AC8] tracking-[0.025rem] text-center mt-[1.5rem]`
  };

const OpenDebtPositions = () => {
  return (
    <div className={styles.openDebt}>
        <div className={styles.dashContainer}>

        </div>
        <div className={styles.listContainer}>
            
        </div>
    </div>
  );
};

export default OpenDebtPositions;
