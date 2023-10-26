"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Drawer, Box, Typography, IconButton } from "@mui/material";

import EczodexLogo from "../../../public/main-logo.svg";
import syncIconWhite from "../../../public/Icons/sync-arrow-white.svg";
import hamburgerIcon from "../../../public/Icons/hamburger.svg";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";


const styles = {
  header: `w-full h-[3.8rem] p-[1rem] flex items-center justify-between bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover xl:hidden`,
  logo: `flex`,
  hamburger: `flex`,
  navIcon: `w-[3rem] h-[3rem] rounded-md flex justify-center items-center`,
  navIconActive: `w-[3rem] h-[3rem] rounded-md bg-white flex justify-center items-center bg-opacity-40`,
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={styles.header}>
        <div className={styles.navIcon}>
          <Image src={hamburgerIcon} alt="hamburgerIcon" width={24} />
        </div>
      <Link href="/" className={styles.logo}>
        <Image src={EczodexLogo} alt="eczodex-logo" />
      </Link>
      <Link href="/transaction" className={styles.navIcon}>
        <Image src={syncIconWhite} alt="syncIconWhite" width={24} />
      </Link>
    </div>
  );
};

export default Header;
