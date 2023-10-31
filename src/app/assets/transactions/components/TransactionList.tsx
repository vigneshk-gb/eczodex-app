import React from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../public/Icons/polygon-down-icon.svg";
import eczodexLogo from "../../../../../public/Icons/eczodex-icon.svg";
import usdcLogo from "../../../../../public/Icons/usdc-icon.svg";

import listNavArrowRight from "../../../../../public/Icons/nav-right.svg";
import listNavArrowLeft from "../../../../../public/Icons/nav-left.svg";

const styles = {
  container: `w-full h-full flex flex-col overflow-auto`,
  tableContainer: `w-full h-full flex flex-col pb-[2.06rem]`,
  tableHeadContainer: `w-full h-[4.56rem] hidden md:flex items-center justify-evenly text-center`,
  tableHeadText: `w-max text-base font-normal text-center leading-[1.4rem] text-[#110E2E]`,
  tableHeadTransaction: `basis-8/12 self-center flex gap-[0.62rem] px-[0.87rem]`,
  tableHeadDate: `basis-4/12  self-center flex gap-[0.62rem] px-[0.87rem]`,
  tableHeadTime: `basis-6/12  self-center flex gap-[0.62rem] px-[0.87rem]`,
  tableHeadStatus: `basis-6/12  self-center flex justify-end gap-[0.62rem] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-y-[1rem] md:gap-[1.87rem]`,
  tableItemWrapper: `w-full h-fit flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid`,
  tableBodyContainer: `w-full h-fit flex`,
  tableBodySubContainerFirst: `basis-9/12 md:basis-7/12 min-h-[4.5rem]  max-md:flex-col justify-between md:items-center md:justify-between flex`,
  tableBodySubContainerSecond: ` basis-3/12 md:basis-5/12 min-h-[4.5rem] max-md:flex-col justify-between md:items-center md:justify-between flex`,
  tableBodySubItem: ` flex w-fit h-fit items-center justify-center gap-[0.5rem] px-[0.87rem]`,
  tableBodyTransaction: `flex basis-8/12 h-full items-center justify-start gap-[0.5rem] px-[0.87rem]`,
  tableBodyDate: `flex basis-4/12 h-full items-center justify-start px-[0.87rem]`,
  tableBodyTime: `flex basis-6/12 h-full items-center max-md:justify-end justify-start px-[0.87rem]`,
  tableBodyStatus: `flex basis-6/12 h-full max-md:-order-1 justify-end px-[0.87rem] flex items-center`,
  assetLogoCtn: `w-[2.5rem] md:w-[3.8rem]`,
  assetName: `w-max text-[0.85rem] md:text-base font-normal md:font-medium leading-[1.2rem] md:leading-[1.4rem] text-[#110E2E]`,
  dateTimeText: `w-max text-[0.75rem] md:text-base font-light md:font-normal leading-[1rem] md:leading-[1.4rem] text-[#110E2E] `,
  timeText: `w-max text-[1.1rem] leading-[1.75rem] font-extrabold text-[#110E2E]`,
  statusCtn: `w-full flex items-center justify-between`,
  statusTextCompleted: `w-max text-[0.85rem] md:text-base font-bold text-[#7FD7A4] leading-[1.2rem] md:leading-[1.4rem] text-end`,
  statusTextPending: `w-max text-[0.85rem] md:text-base font-bold text-[#D1CA7B] leading-[1.2rem] md:leading-[1.4rem] text-end`,
  statusTextFailed: `w-max text-[0.85rem] md:text-base  font-bold text-[#F17E7E] leading-[1.2rem] md:leading-[1.4rem]text-end`,
  statusBar: `flex`,
  dropDownArrow: `flex`,
  listNavContainer: `w-full md:w-fit flex justify-center items-center gap-[0.69rem] mx-auto mt-[0.5rem] md:mt-[2rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: `flex`,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
};

const TransactionList = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeadContainer}>
        <div className={styles.tableBodySubContainerFirst}>
          <div className={styles.tableHeadTransaction}>
            <span className={styles.tableHeadText}>Transaction</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadDate}>
            <span className={styles.tableHeadText}>Date</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
        </div>
        <div className={styles.tableBodySubContainerSecond}>
          <div className={styles.tableHeadTime}>
            <span className={styles.tableHeadText}>Time</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadStatus}>
            <span className={styles.tableHeadText}>Status</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableBodyWrapper}>
        <div className={styles.tableItemWrapper}>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySubContainerFirst}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={eczodexLogo} alt="eczodexLogo" />
                </div>
                <div className={styles.assetName}>Mint Eczodex Stablecoin</div>
              </div>
              <div className={styles.tableBodyDate}>
                <div className={styles.dateTimeText}>3 August 2022</div>
              </div>
            </div>
            <div className={styles.tableBodySubContainerSecond}>
              <div className={styles.tableBodyTime}>
                <div className={styles.dateTimeText}>10:32 PM</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusTextCompleted}>Completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableItemWrapper}>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySubContainerFirst}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={eczodexLogo} alt="eczodexLogo" />
                </div>
                <div className={styles.assetName}>Adjust Collateral</div>
              </div>
              <div className={styles.tableBodyDate}>
                <div className={styles.dateTimeText}>3 August 2022</div>
              </div>
            </div>
            <div className={styles.tableBodySubContainerSecond}>
              <div className={styles.tableBodyTime}>
                <div className={styles.dateTimeText}>10:32 PM</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusTextFailed}>Failed</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableItemWrapper}>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySubContainerFirst}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={eczodexLogo} alt="eczodexLogo" />
                </div>
                <div className={styles.assetName}>Adjust Debt</div>
              </div>
              <div className={styles.tableBodyDate}>
                <div className={styles.dateTimeText}>3 August 2022</div>
              </div>
            </div>
            <div className={styles.tableBodySubContainerSecond}>
              <div className={styles.tableBodyTime}>
                <div className={styles.dateTimeText}>10:32 PM</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusTextPending}>Pending</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableItemWrapper}>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySubContainerFirst}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={usdcLogo} alt="usdcLogo" />
                </div>
                <div className={styles.assetName}>Mint Wrapped USDC</div>
              </div>
              <div className={styles.tableBodyDate}>
                <div className={styles.dateTimeText}>3 August 2022</div>
              </div>
            </div>
            <div className={styles.tableBodySubContainerSecond}>
              <div className={styles.tableBodyTime}>
                <div className={styles.dateTimeText}>10:32 PM</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusTextCompleted}>Completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableItemWrapper}>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySubContainerFirst}>
              <div className={styles.tableBodyTransaction}>
                <div className={styles.assetLogoCtn}>
                  <Image src={eczodexLogo} alt="eczodexLogo" />
                </div>
                <div className={styles.assetName}>Mint Eczodex Stablecoin</div>
              </div>
              <div className={styles.tableBodyDate}>
                <div className={styles.dateTimeText}>3 August 2022</div>
              </div>
            </div>
            <div className={styles.tableBodySubContainerSecond}>
              <div className={styles.tableBodyTime}>
                <div className={styles.dateTimeText}>10:32 PM</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusTextFailed}>Failed</div>
              </div>
            </div>
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

export default TransactionList;
