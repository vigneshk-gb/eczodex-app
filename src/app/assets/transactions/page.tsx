import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import TransactionStatus from "./components/TransactionStatus";

const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}


const Transactions = () => {
  return (
    <div>
      <div className={styles.appWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <TransactionStatus/>
      </div>
    </div>
  );
};

export default Transactions;
