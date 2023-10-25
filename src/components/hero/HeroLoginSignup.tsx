import React from 'react'
import Image from 'next/image';

import eczodexLogo from "../../../../public/Images/LogoBlue.png"

const styles = {
    hero: `w-1/2 h-screen rounded-l-[1rem] bg-[url('../../public/Images/LoginPage.png')] bg-cover bg-center flex flex-col justify-center items-center hidden lg:block`,
  };

const HeroLoginSignup = () => {
  return (
    <div className={styles.hero}>
    </div>
  )
}

export default HeroLoginSignup