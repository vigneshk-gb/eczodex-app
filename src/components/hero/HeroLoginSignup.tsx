import React from 'react'
import Image from 'next/image';

import eczodexLogo from "../../../../public/Images/LogoBlue.png"

const styles = {
    hero: `w-1/2 h-screen rounded-l-[1rem] bg-[url('../../public/Images/LoginPage.png')] bg-cover flex flex-col justify-center items-center`,
    logoContainer: `flex`,
    heroCtn: `w-[35.43rem]`,
    heroText:`text-[2rem] text-center font-extrabold leading-[2.78rem] bg-clip-text text-transparent bg-gradient-to-br from-[#36A1CF] to-[#130F40] to-[#5D9C6B]`
  };

const HeroLoginSignup = () => {
  return (
    <div className={styles.hero}>
    </div>
  )
}

export default HeroLoginSignup