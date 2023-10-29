import React from 'react'
import Sidebar from "@/components/sidebar/Sidebar";
import RedeemAsset from './components/RedeemAsset';
import OpenDebtPositions from './components/OpenDebtPositions';



const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}

const Redeem  = () => {
  return (
    <div className={styles.appWrapper}>
    <div className={styles.dummyContainer}></div>
    <Sidebar /> 
    <RedeemAsset />
    {/* <OpenDebtPositions/> */}
  </div>
  )
}

export default Redeem 