import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConnectedWallets from "./components/ConnectedWallets";


const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}


const ConnectedWalletsPage = () => {
  return (
    <div>
      <div className={styles.appWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <ConnectedWallets/>
      </div>
    </div>
  );
};


export default ConnectedWalletsPage;
