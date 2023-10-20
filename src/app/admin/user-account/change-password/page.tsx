import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ChangePassword from "./components/ChangePassword";



const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
  dummyContainer: `w-[22.43rem] h-screen rounded-r-[1rem] appearence-none`,
};

const ChangePasswordPage = () => {
  return (
    <div>
      <div className={styles.assetWrapper}>
        <div className={styles.dummyContainer}></div>
        {/* <Sidebar /> */}
        <ChangePassword/>
      </div>
    </div>
  );
};


export default ChangePasswordPage;
