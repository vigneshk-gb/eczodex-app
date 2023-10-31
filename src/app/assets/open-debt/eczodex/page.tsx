import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import OpenDebtPositions from "./components/OpenDebtPositions";

const styles = {
  appWrapper: `w-full h-fit flex bg-[#ffff]`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}

const OpenDebt = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.dummyContainer}></div>
      <Sidebar />
      <OpenDebtPositions />
    </div>
  );
};

export default OpenDebt;
