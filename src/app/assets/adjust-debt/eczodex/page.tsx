import React from 'react'
import Sidebar from "@/components/sidebar/Sidebar";
import AdjustDebtPosition from './components/AdjustDebtPosition';




const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}

const AdjustDebt  = () => {
  return (
    <div className={styles.appWrapper}>
    <div className={styles.dummyContainer}></div>
    <Sidebar /> 
    <AdjustDebtPosition/>
  </div>
  )
}

export default AdjustDebt 