import React from 'react'
import Sidebar from "@/components/sidebar/Sidebar";
import AdjustDebtPosition from './components/AdjustDebtPosition';




const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
  dummyContainer: `w-[22.43rem] h-screen rounded-r-[1rem] appearence-none`,
};

const AdjustDebt  = () => {
  return (
    <div className={styles.assetWrapper}>
    <div className={styles.dummyContainer}></div>
    <Sidebar /> 
    <AdjustDebtPosition/>
  </div>
  )
}

export default AdjustDebt 