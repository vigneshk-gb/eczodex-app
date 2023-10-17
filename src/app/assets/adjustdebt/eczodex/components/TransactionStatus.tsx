import React from 'react'
import Image from "next/image";

import checkboxLogo from "../../../../../../public/Icons/file-checkbox.svg";

const styles = {
    transferContainer: `w-[51.56rem] h-fit mt-[2rem] mx-auto px-[2.81rem] py-[5rem]  overflow-hidden flex flex-col items-center gap-[1rem]`,
    checkboxLogo: `w-[3.81rem] h-[3.81rem]`,
    title: `font-semibold tracking-[0.0375rem] font-[1.5rem] text-center`,
    infoText: `font-normal tracking-[0.0375rem] font-[1.125rem] text-center`,
    statusText: `text-[#110E2E] text-[1rem] font-semibold tracing-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`
}


const TransactionStatus = () => {
  return (
    <div className={styles.transferContainer}>
        <div className={styles.checkboxLogo}>
        <Image src={checkboxLogo} alt="checkboxLogo" />
        </div>
        <div className={styles.title}> 
        Instructions received
        </div>
        <div className={styles.infoText}>
        50,000.00 ECZ to be minted on receipt of funds<br/>
        View the status on the transactions page
        </div>
        <div className={styles.statusText}>
        Transaction Status
        </div>
    </div>
  )
}

export default TransactionStatus