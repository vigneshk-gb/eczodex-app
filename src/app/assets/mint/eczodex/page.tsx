import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import Mint from "./components/Mint";

const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}

const Asset = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.dummyContainer}></div>
      <Sidebar />
      <Mint />
    </div>
  );
};

export default Asset;
