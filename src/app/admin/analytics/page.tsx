import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import AnalyticsDetailed from "./components/AnalyticsDetailed";


const styles = {
  appWrapper: `w-full h-fit flex bg-[#ffff]`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
}

const Analytics = () => {
  return (
    <div>
      <div className={styles.appWrapper}>
        <div className={styles.dummyContainer}></div>
        <Sidebar />
        <AnalyticsDetailed/>
      </div>
    </div>
  );
};


export default Analytics;
