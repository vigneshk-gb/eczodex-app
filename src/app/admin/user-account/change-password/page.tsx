import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

import ChangePasswordForm from "./components/ChangePasswordForm";


const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}


const ChangePasswordPage = () => {
  return (
    <div>
      <div className={styles.appWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <ChangePasswordForm/>
      </div>
    </div>
  );
};


export default ChangePasswordPage;
