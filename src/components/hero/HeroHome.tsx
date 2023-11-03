import React from "react";
import Image from "next/image";
import Link from "next/link";
import elipseSmall from "../../../public/Images/Ellipse-sm.svg";
import elipseMedium from "../../../public/Images/Ellipse-md.svg";
import elipseLarge from "../../../public/Images/Ellipse-lg.svg";

import eczodexLogo from "../../../public/Images/Vector.svg";
import polymeshLogo from "../../../public/Images/Union.svg";


import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Header from "../header/Header";

const styles = {
  container: `w-full h-full flex flex-col overflow-auto`,
  dashboard: `relative w-full md:max-w-[90%] min-h-screen bg-white flex flex-col items-center justify-start xl:justify-end gap-[1rem] md:gap-[2rem] mx-auto md:my-[0.5rem] self-center rounded-[1rem] overflow-hidden`,
  elipseSm: `absolute  w-[3.25rem] h-[3.25rem] top-[4.25rem] right-[20.13rem] z-0`,
  elipseMd: `absolute w-[6.25rem] h-[6.25rem]  top-[11.25rem] right-[5.31rem] z-0`,
  elipseLg: `absolute w-[18.81rem] h-[18.81rem] top-0 left-0 z-0 hidden md:block`,
  titleContainer: `md:min-w-[22.12rem] w-full h-fit mt-[2rem] md:mt-[16rem] flex justify-between px-[1rem] lg:px-[2rem] lg:px-[4rem] z-10`,
  titleCtn: `md:w-4/6 fit flex flex-wrap gap-x-4`,
  primaryText: `text-[2rem] md:text-[2.8rem] font-semibold text-[#6E7187] leading-[2rem] md:leading-[4rem] `,
  secondaryText: `text-[2rem] md:text-[2.8rem] font-semibold text-[#110E2E] leading-[2rem] md:leading-[4rem] `,
  arrowBox: `w-fit h-fit gap-1 self-end hidden md:flex`,
  arrowLeftIcon: `text-[#6E7187]`,
  arrowRightIcon: `text-[#110E2E]`,
  assetsContainer: `w-full h-fit flex flex-wrap justify-center md:justify-start px-[1rem] lg:px-[2rem] py-[1rem] gap-[1rem] z-10`,
  assetCard1: `w-full max-w-[22.12rem] h-[13rem] xl:h-[26rem] flex flex-col items-start justify-between bg-[#2E3578] py-[2rem] px-[1.5rem] rounded-[0.87rem] bg-[url('../../public/Images/Vector-Overlay.svg')] bg-cover xl:bg-contain bg-center bg-no-repeat`,
  assetCard2: `w-full max-w-[22.12rem] h-[13rem] xl:h-[26rem] flex flex-col items-start justify-between bg-[#1D61AC] py-[2rem] px-[1.5rem] rounded-[0.87rem] bg-[url('../../public/Images/Union-Overlay.svg')] bg-cover xl:bg-contain bg-center bg-no-repeat`,
  dummyCard: ` w-full max-w-[22.12rem] h-[13rem] xl:h-[26rem] flex items-center justify-center bg-[#B0D8F7] bg-opacity-20 rounded-[0.87rem]`,
  assetLogo: `w-[3.25rem] h-[3.25rem] xl:w-[5.25rem] xl:h-[5.25rem]`,
  assetCtn: `flex flex-col items-start text-white gap-2 lg:gap-3`,
  assetTitle: `font-semibold text-[1.5rem] xl:text-[1.8rem] leading-normal`,
  assetDesc: `font-semibold text-[0.80rem] xl:text-base leading-[1.2rem] opacity-50 flex`,
  infoIcon: `ml-1 my-auto`,
  dummyText: `text-center font-semibold text-[2rem] opacity-10`
};

const HeroHome = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.dashboard}>
      <Image className={styles.elipseSm} src={elipseSmall} alt="elipse" />
      <Image className={styles.elipseMd} src={elipseMedium} alt="elipse" />
      <Image className={styles.elipseLg} src={elipseLarge} alt="elipse" />
      <div className={styles.titleContainer}>
        <div className={styles.titleCtn}>
          <span className={styles.primaryText}>The</span>
          <span className={styles.secondaryText}>Gateway</span>
          <span className={styles.primaryText}>to</span>
          <span className={styles.secondaryText}>the</span>
          <span className={styles.primaryText}>New</span>
          <span className={styles.secondaryText}>Financial</span>
          <span className={styles.primaryText}>Economy</span>
        </div>
        <div className={styles.arrowBox}>
          <AiOutlineLeft size={28} className={styles.arrowLeftIcon} />
          <AiOutlineRight size={28} className={styles.arrowRightIcon} />
        </div>
      </div>
      <div className={styles.assetsContainer}>
        <Link href={`/assets/mint/eczodex`} className={styles.assetCard1}>
          <div className={styles.assetLogo}>
            <Image className={styles.assetLogo} src={eczodexLogo} alt="assetLogo" />
          </div>
          <div className={styles.assetCtn}>
            <div className={styles.assetTitle}>
              ECZ
            </div>
            <div className={styles.assetDesc}>
              Eczodex Stablecoin
              <AiFillInfoCircle className={styles.infoIcon} size={15} color="white"/>
            </div>
          </div>
        </Link>
        <div className={styles.assetCard2}>
          <div className={styles.assetLogo}>
            <Image
              className={styles.assetLogo}
              src={polymeshLogo}
              alt="assetLogo"
            />
          </div>
          <div className={styles.assetCtn}>
            <div className={styles.assetTitle}>
              pUSDC
            </div>
            <div className={styles.assetDesc}>
            Polymesh Wrapped USDC
              <AiFillInfoCircle className={styles.infoIcon} size={15} color="white"/>
            </div>
          </div>
        </div>
        <div className={styles.dummyCard}>
          <div className={styles.dummyText}> 
          Coming Soon!
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default HeroHome;
