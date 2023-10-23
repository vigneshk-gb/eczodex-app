import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

import ChangePasswordForm from "./components/ChangePasswordForm";


const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
  dummyContainer: `w-[22.43rem] h-screen rounded-r-[1rem] appearence-none`,
};

const ChangePasswordPage = () => {
  return (
    <div>
      <div className={styles.assetWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <ChangePasswordForm/>
      </div>
    </div>
  );
};


export default ChangePasswordPage;
