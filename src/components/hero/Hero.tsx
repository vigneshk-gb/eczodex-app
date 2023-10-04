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

const styles = {
  dashboard: `relative w-[73rem] h-[58rem] bg-white mx-auto self-center rounded-[1rem] overflow-hidden`,
  elipseSm: `absolute  w-[3.25rem] h-[3.25rem] top-[4.25rem] right-[20.13rem]`,
  elipseMd: `absolute w-[6.25rem] h-[6.25rem] top-[11.25rem] right-[5.31rem]`,
  elipseLg: `absolute w-[18.81rem] h-[18.81rem] top-0 left-0 `,
  titleContainer: `w-full h-fit flex mt-[19.31rem] ml-[4rem]`,
  titleCtn: `w-[58rem] h-[9rem]`,
  primaryText: `text-[2.8rem] font-semibold text-[#6E7187] capitalize m-1 leading-[4.81rem]`,
  secondaryText: `text-[2.8rem] font-semibold text-[#110E2E] capitalize m-1 leading-[4.81rem]`,
  arrowBox: `flex mt-auto mt-auto mr-[5.31rem] mb-[1rem] gap-1`,
  arrowLeftIcon: `text-[#6E7187]`,
  arrowRightIcon: `text-[#110E2E]`,
  assetsContainer: `w-full h-full flex mt-[2rem] p-4 justify-evenly`,
  assetCard1: `w-[22.12rem] h-[26rem] flex flex-col items-start justify-between bg-[#2E3578] py-[2rem] px-[1.5rem] rounded-[0.87rem] bg-[url('../../public/Images/Vector-Overlay.svg')] bg-contain bg-no-repeat`,
  assetCard2: `w-[22.12rem] h-[26rem] flex flex-col items-start justify-between bg-[#1D61AC] py-[2rem] px-[1.5rem] rounded-[0.87rem] bg-[url('../../public/Images/Union-Overlay.svg')] bg-contain bg-no-repeat`,
  dummyCard: `w-[22.12rem] h-[26rem] flex items-center justify-center bg-[#B0D8F7] bg-opacity-20`,
  assetLogo: `w-[5.25rem] h-[5.25rem]`,
  assetCtn: `flex flex-col items-start text-white gap-4`,
  assetTitle: `font-semibold text-[1.8rem] leading-normal`,
  assetDesc: `font-semibold text-[0.80rem] leading-[1.2rem] opacity-50 flex`,
  infoIcon: `ml-1 my-auto`,
  dummyText: `text-center font-semibold text-[2rem] opacity-10`
};

const Hero = () => {
  return (
    <div className={styles.dashboard}>
      <Image className={styles.elipseSm} src={elipseSmall} alt="elipse" />
      <Image className={styles.elipseMd} src={elipseMedium} alt="elipse" />
      <Image className={styles.elipseLg} src={elipseLarge} alt="elipse" />
      <div className={styles.titleContainer}>
        <div className={styles.titleCtn}>
          <span className={styles.primaryText}>Phasellus</span>
          <span className={styles.secondaryText}>Stablecoins</span>
          <span className={styles.primaryText}>Bibendum</span>
          <br />
          <span className={styles.secondaryText}>Mint</span>
          <span className={styles.primaryText}>Vulputate Pretium</span>
          <span className={styles.secondaryText}>Redeeem</span>
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
  );
};

export default Hero;
