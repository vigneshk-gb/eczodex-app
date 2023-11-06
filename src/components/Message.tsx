import Image from "next/image";
import React from "react";

import errorImg from "../../public/Images/error.svg";
import warningImg from "../../public/Images/warning.svg";
import successImg from "../../public/Images/success.svg";

const styles = {
  messageContainer: `w-full max-w-[55rem] h-fit mt-[2rem] mx-auto px-[2.81rem] py-[5rem] overflow-hidden flex flex-col items-center gap-[2rem] px-[1rem] md:px-[2.5rem]`,
  messageLogo: `w-full md:w-[48rem] md:h-[13rem] flex justify-center items-center`,
  messageText: `text-base md:text-[2rem] text-center font-semibold`,
  primaryBtn: `w-full max-w-[22rem] py-[1rem] md:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] md:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center`,
};

const Message = () => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageLogo}>
        {/* <Image src={errorImg} alt="errorImg" /> */}
        {/* <Image src={warningImg} alt="warningImg" /> */}
        <Image src={successImg} alt="successImg" />
      </div>
      {/* <div className={styles.messageText}>Sample Error Message</div> */}
      {/* <div className={styles.messageText}>Sample Warning Message</div> */}
      <div className={styles.messageText}>Sample Success Message</div>
      <div className={styles.primaryBtn}>Back to Home</div>
    </div>
  );
};

export default Message;
