import React from 'react'
import Image from "next/image";

import fileArrow from "../../../../../public/Icons/file-arrow-icon.png";
import TransactionList from './TransactionList';

const styles = {
  transactions: `w-[73rem] min-h-[56rem] h-fit bg-[#ffff] border-[#E4E3EB] rounded-[1rem] border-[1px] self-center mx-auto border-solid`,
  headContainer: `w-full px-[2.44rem] py-[2.69rem] flex items-center justify-between`,
  headText: `text-base text-[#110E2E] font-semibold`,
};


const TransactionStatus = () => {
  return (
    <div className={styles.transactions}>
      <div className={styles.headContainer}>
        <div className={styles.headText}>Transaction Status</div>
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