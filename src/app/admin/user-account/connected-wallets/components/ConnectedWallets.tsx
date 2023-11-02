"use client"

import React, {useState} from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../../public/Icons/polygon-down-icon.svg";
import plusIcon from "../../../../../../public/Icons/plus.svg";
import checkIcon from "../../../../../../public/Icons/check-icon.svg";
import crossIcon from "../../../../../../public/Icons/cross-icon.svg";
import dotMenuIcon from "../../../../../../public/Icons/dot-menu-icon.svg";
import teslaLogo from "../../../../../../public/Icons/tesla-logo.svg";
import appleLogo from "../../../../../../public/Icons/apple-logo.svg";
import checkLogo from "../../../../../../public/Icons/check-icon.svg";
import dropDownArrowUp from "../../../../../../public/Icons/dropDownArrowUp.svg";
import dropDownArrowDown from "../../../../../../public/Icons/dropDownArrowDown.svg";

import listNavArrowRight from "../../../../../../public/Icons/nav-right.svg";
import listNavArrowLeft from "../../../../../../public/Icons/nav-left.svg";
import Header from "@/components/header/Header";

const styles = {
  container: `w-full h-full flex flex-col overflow-auto`,
  listContainer: `w-full md:w-[98%] min-h-screen bg-[#ffff] border-[#E4E3EB] border-[1px] border-solid mx-auto md:my-[0.5rem] self-center rounded-[1rem] p-[1rem] md:p-[2.5rem]`,
  listHeadContainer: `w-full mb-[2rem] flex items-center justify-between`,
  listTitle: `text-[1.1rem] md:text-[1.25rem] text-[#110E2E] font-medium`,
  tableHeadText: `w-max text-base font-normal text-center leading-[1.4rem] text-[#110E2E]`,
  headItemTitleSecondary: `text-[0.75rem] md:text-base font-normal text-[#6E7187] leading-[1.4rem] max-md:block hidden`,
  tableContainer: `w-full h-full flex flex-col pb-[2.06rem] overflow-x-scroll no-scrollbar`,
  tableHeadContainer: `w-full h-[4.56rem] md:min-w-[50rem] hidden md:flex items-center justify-evenly text-center`,
  tableHeadItem: `basis-2/6 flex gap-[0.62rem] px-[0.87rem]`,
  tableHeadWalletAddress: `basis-4/6 flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadChain: `basis-2/6 flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadWalletName: `basis-2/6  flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-[0.5rem] md:gap-[1rem]`,
  tableItemWrapper: `w-full h-fit flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid min-w-[18rem] md:min-w-[50rem]`,
  tableBodyContainer: `relative w-full h-auto min-h-[4.5rem] max-md:flex-col max-md:justify-start gap-y-[1rem] flex md:items-center py-[0.75rem]`,
  tableBodyContainerToggled: `w-full h-[4.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex`,
  toggledContainer: `w-full h-[5.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex border-solid border-t-2 border-opacity-10 border-[#2B8AC8]`,
  toggledCtn: `flex flex-col gap-[0.5rem]`,
  toggledCtnTxt: `font-normal text-base leading-[1.4rem] text-[#6E7187]`,
  toggledCtnTxtSec: `font-bold text-base leading-[1.4rem] text-[#110E2E]`,
  tableBodyItem: `md:basis-2/6  h-full flex items-center px-[0.87rem]`,
  tableBodyWalletAddress: `md:basis-4/6  px-[0.87rem]`,
  tableBodyChain: `md:basis-2/6 px-[0.87rem]`,
  tableBodyWalletName: `md:basis-2/6  px-[0.87rem]`,
  walletNameContainer: `w-full items-center justify-between gap-[1rem]`,
  tickerLogoTxt: `text-base font-bold leading-[1.4rem]`,
  walletAddressTxt: `text-[0.87rem] md:text-base leading-[1.4rem] font-medium`,
  itemDetailsTxt: `text-[0.87rem] md:text-base text-base leading-[1.4rem] font-normal`,
  addNewBtn: `w-full h-fit flex items-center justify-center border-[#449ECF] rounded-[0.5rem] border border-solid py-[0.94rem] bg-[#449ECF] bg-opacity-5 min-w-[18rem] md:min-w-[50rem]`,
  addNewCtn: `flex items-center gap-[1.6rem]`,
  inputContainer: `w-full h-fit max-md:flex-col flex bg-[#F6F8FA] rounded-[0.5rem] p-[0.88rem] gap-[1rem] min-w-[18rem] md:min-w-[50rem]`,
  walletInput: `w-full md:basis-2/6  px-[1rem] py-[0.88rem] outline-none font-medium text-[0.87rem] md:text-base text-clip rounded-[0.5rem] placeholder:text-base placeholder:text-[#6E7187] placeholder:font-normal`,
  chainInput: `w-full md:basis-2/6  px-[1rem] py-[0.88rem] outline-none font-medium text-[0.87rem] md:text-base text-clip rounded-[0.5rem] placeholder:text-base placeholder:text-[#6E7187] placeholder:font-normal`,
  walletInputContainer: `w-full md:basis-2/6 max-md:flex-col flex max-md:items-end items-center justify-between gap-[1rem] `,
  submitContainer: `flex gap-[0.2rem]`,
  submitIcon: `flex`,
  cancelIcon: `flex`,
  nameInput: `w-full px-[1rem] py-[0.88rem] outline-none font-medium text-[0.87rem] md:text-base text-clip rounded-[0.5rem] placeholder:text-base placeholder:text-[#6E7187] placeholder:font-normal`,
  addNewTxt: `text-[0.87rem] md:text-base font-bold leading-[1.2rem] md:leading-[1.4rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  listNavContainer: `w-full md:w-fit flex justify-center items-center gap-[0.69rem] mx-auto mt-[0.5rem] md:mt-[2rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: ``,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
  dotMenuIcon: `absolute max-md:top-3 max-md:right-3 top-6 right-2`,
};

const ConnectedWallets = () => {
  const [isAddnew, setIsAddnew] = useState(false);


  function toggleAddNew () {
    setIsAddnew(!isAddnew)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.listContainer}>
        <div className={styles.listHeadContainer}>
          <div className={styles.listTitle}>Connected Wallets</div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeadContainer}>
            <div className={styles.tableHeadWalletAddress}>
              <span className={styles.tableHeadText}>Wallet Address</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
            <div className={styles.tableHeadChain}>
              <span className={styles.tableHeadText}>Chain</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
            <div className={styles.tableHeadWalletName}>
              <span className={styles.tableHeadText}>Wallet Name</span>
              <Image
                src={arrowDownLogo}
                alt="arrowDownLogo"
                width={10}
                height={6}
              />
            </div>
          </div>
          <div className={styles.tableBodyWrapper}>
            <div className={styles.tableItemWrapper}>
              <div className={styles.tableBodyContainer}>
                <div className={styles.tableBodyWalletAddress}>
                  <span className={styles.headItemTitleSecondary}>
                    Wallet Address
                  </span>
                  <div className={styles.walletAddressTxt}>
                    0x7845F69A37CB9E0E7FBDE10BF600E8
                  </div>
                </div>
                <div className={styles.tableBodyChain}>
                  <span className={styles.headItemTitleSecondary}>Chain</span>
                  <div className={styles.itemDetailsTxt}>Ethereum</div>
                </div>
                <div className={styles.tableBodyWalletName}>
                  <div className={styles.walletNameContainer}>
                    <span className={styles.headItemTitleSecondary}>
                      Wallet Name
                    </span>
                    <div className={styles.itemDetailsTxt}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                <div className={styles.dotMenuIcon}>
                      <Image src={dotMenuIcon} alt="dotMenuIcon" width={5} />
                    </div>
              </div>
            </div>
            <div className={styles.tableItemWrapper}>
              <div className={styles.tableBodyContainer}>
                <div className={styles.tableBodyWalletAddress}>
                   <span className={styles.headItemTitleSecondary}>
                    Wallet Address
                  </span>
                  <div className={styles.walletAddressTxt}>
                    TQjrfPJB9Xa5eP1GDcjaPXqfKbkr9hWaRf
                  </div>
                </div>
                <div className={styles.tableBodyChain}>
                  <span className={styles.headItemTitleSecondary}>Chain</span>
                  <div className={styles.itemDetailsTxt}>Cosmos</div>
                </div>
                <div className={styles.tableBodyWalletName}>
                  <div className={styles.walletNameContainer}>
                    <span className={styles.headItemTitleSecondary}>
                      Wallet Name
                    </span>
                    <div className={styles.itemDetailsTxt}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                <div className={styles.dotMenuIcon}>
                      <Image src={dotMenuIcon} alt="dotMenuIcon" width={5} />
                    </div>
              </div>
            </div>
            <div className={styles.tableItemWrapper}>
              <div className={styles.tableBodyContainer}>
                <div className={styles.tableBodyWalletAddress}>
                   <span className={styles.headItemTitleSecondary}>
                    Wallet Address
                  </span>
                  <div className={styles.walletAddressTxt}>
                    msbueF6Z71RrBUrAhz6Fj1i5PAzvi9ckVC
                  </div>
                </div>
                <div className={styles.tableBodyChain}>
                  <span className={styles.headItemTitleSecondary}>Chain</span>
                  <div className={styles.itemDetailsTxt}>Fanthom</div>
                </div>
                <div className={styles.tableBodyWalletName}>
                  <div className={styles.walletNameContainer}>
                    <span className={styles.headItemTitleSecondary}>
                      Wallet Name
                    </span>
                    <div className={styles.itemDetailsTxt}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                <div className={styles.dotMenuIcon}>
                      <Image src={dotMenuIcon} alt="dotMenuIcon" width={5} />
                    </div>
              </div>
            </div>
            <div className={styles.tableItemWrapper}>
              <div className={styles.tableBodyContainer}>
                <div className={styles.tableBodyWalletAddress}>
                   <span className={styles.headItemTitleSecondary}>
                    Wallet Address
                  </span>
                  <div className={styles.walletAddressTxt}>
                    mvK1nPwYgqAYEMTeyQcTc18pUPe7MPHnrJ
                  </div>
                </div>
                <div className={styles.tableBodyChain}>
                  <span className={styles.headItemTitleSecondary}>Chain</span>
                  <div className={styles.itemDetailsTxt}>Polygon</div>
                </div>
                <div className={styles.tableBodyWalletName}>
                  <div className={styles.walletNameContainer}>
                    <span className={styles.headItemTitleSecondary}>
                      Wallet Name
                    </span>
                    <div className={styles.itemDetailsTxt}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                <div className={styles.dotMenuIcon}>
                      <Image src={dotMenuIcon} alt="dotMenuIcon" width={5} />
                    </div>
              </div>
            </div>
            <div className={styles.tableItemWrapper}>
              <div className={styles.tableBodyContainer}>
                <div className={styles.tableBodyWalletAddress}>
                   <span className={styles.headItemTitleSecondary}>
                    Wallet Address
                  </span>
                  <div className={styles.walletAddressTxt}>
                    n3AtGGmVxxpP1Vfvs8kogP9FHvMjBJ81s2
                  </div>
                </div>
                <div className={styles.tableBodyChain}>
                  <span className={styles.headItemTitleSecondary}>Chain</span>
                  <div className={styles.itemDetailsTxt}>Polygon zkEVM</div>
                </div>
                <div className={styles.tableBodyWalletName}>
                  <div className={styles.walletNameContainer}>
                    <span className={styles.headItemTitleSecondary}>
                      Wallet Name
                    </span>
                    <div className={styles.itemDetailsTxt}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                      <div className={styles.dotMenuIcon}>
                      <Image src={dotMenuIcon} alt="dotMenuIcon" width={5} />
                    </div>
              </div>
            </div>
            <div className={styles.addNewBtn} onClick={toggleAddNew}>
              <div className={styles.addNewCtn}>
                <span className={styles.addNewTxt}>Add New</span>
                <Image src={plusIcon} alt="plusIcon" width={24} />
              </div>
            </div>
            {
              isAddnew && (
                <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.walletInput}
                placeholder="Wallet Address"
              />
              <input
                type="text"
                className={styles.chainInput}
                placeholder="Chain"
              />
              <div className={styles.walletInputContainer}>
                <input
                  type="text"
                  className={styles.nameInput}
                  placeholder="Wallet Name"
                />
                <div className={styles.submitContainer}>
                  <div className={styles.submitIcon}>
                    <Image src={checkIcon} alt="checkIcon" width={32} />
                  </div>
                  <div className={styles.cancelIcon}>
                    <Image src={crossIcon} alt="crossIcon" width={40} />
                  </div>
                </div>
              </div>
            </div>
              )
            }
          </div>
        </div>
        <div className={styles.listNavContainer}>
          <div className={styles.navContainer}>
            <div className={styles.listNavArrow}>
              <Image src={listNavArrowLeft} alt="listNavArrowLeft" width={6} />
            </div>
            <div className={styles.listNavText}>Prev</div>
          </div>
          <div className={styles.listActivePage}>1</div>
          <div className={styles.listPage}>2</div>
          <div className={styles.listPage}>3</div>
          <div className={styles.navContainer}>
            <div className={styles.listNavText}>Next</div>
            <div className={styles.listNavArrow}>
              <Image
                src={listNavArrowRight}
                alt="listNavArrowRight"
                width={6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallets;
