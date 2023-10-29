import React from 'react'
import Image from "next/image";

import fileArrow from "../../../../../public/Icons/file-arrow-icon.png";
import TransactionList from './TransactionList';

const styles = {
  transactions: `w-full max-w-[73rem] min-h-screen bg-[#ffff] border-[#E4E3EB] border-[1px] border-solid mx-auto md:my-[0.5rem] self-center rounded-[1rem] p-[1rem] md:p-[2.5rem]`,
  listHeadContainer: `w-full mb-[1rem] flex items-center justify-between`,
  listTitle: `text-[1.1rem] md:text-[1.25rem] text-[#110E2E] font-medium`,
};


const TransactionStatus = () => {
  return (
    <div className={styles.transactions}>
      <div className={styles.listHeadContainer}>
        <div className={styles.listTitle}>Transaction Status</div>
        <Image
              src={fileArrow}
              alt="fileArrow"
              width={40}
            />
      </div>
      <TransactionList/>
    </div>
  )
}

export default TransactionStatus