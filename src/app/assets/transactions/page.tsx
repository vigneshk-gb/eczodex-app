import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import TransactionStatus from "./components/TransactionStatus";

const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
  dummyContainer: `w-[22.43rem] h-screen rounded-r-[1rem] appearence-none`,
};

const Transactions = () => {
  return (
    <div>
      <div className={styles.assetWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <TransactionStatus/>
      </div>
    </div>
  );
};

export default Transactions;
