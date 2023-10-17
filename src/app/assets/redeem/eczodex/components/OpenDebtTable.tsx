import React from "react";
import Image from "next/image";

import arrowDownLogo from "../../../../../../public/Icons/polygon-down-icon.svg";
import checkLogo from "../../../../../../public/Icons/check-icon.svg";
import teslaLogo from "../../../../../../public/Icons/tesla-logo.svg";
import ethLogo from "../../../../../../public/Icons/eth-logo2.svg";
import vanguardLogo from "../../../../../../public/Icons/vanguard-logo.svg";
import bitcoinLogo from "../../../../../../public/Icons/bitcoin-logo.svg";
import appleLogo from "../../../../../../public/Icons/apple-logo.svg";
import statusSafe from "../../../../../../public/Icons/status-safe.svg";
import statusStable from "../../../../../../public/Icons/status-stable.svg";
import statusRisk from "../../../../../../public/Icons/status-risk.svg";
import dropDownArrowUp from "../../../../../../public/Icons/dropDownArrowUp.svg";
import dropDownArrowDown from "../../../../../../public/Icons/dropDownArrowDown.svg";
import listNavArrowRight from "../../../../../../public/Icons/nav-right.svg";
import listNavArrowLeft from "../../../../../../public/Icons/nav-left.svg";

const styles = {
  listContainer: `w-full min-h-[40rem] h-fit bg-[#ffff] border-[#E4E3EB] rounded-[1rem] border-[1px] border-solid overflow-hidden`,
  tableContainer: `w-full h-full flex flex-col px-[2.44rem] pb-[2.06rem]`,
  tableHeadContainer: `w-full h-[4.56rem] flex text-left`,
  tableHeadSymbol: `basis-3/12 self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadQuantity: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadAmountBorrowed: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadLiquidationPrice: `basis-2/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableHeadStatus: `basis-3/12  self-center flex gap-[0.62rem] font-normal text-base leading-[1.4rem] text-[#110E2E] px-[0.87rem]`,
  tableBodyWrapper: `w-full h-fit flex flex-col gap-[1.87rem]`,
  tableItemWrapper: `w-full h-fit flex flex-col border-[#E4E3EB] rounded-[0.5rem] border border-solid`,
  tableBodyContainer: `w-full h-[4.56rem] flex`,
  tableBodyContainerToggled: `w-full h-[4.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex`,
  toggledContainer: `w-full h-[5.56rem] bg-[#2B8AC8] bg-opacity-[0.05] flex border-solid border-t-2 border-opacity-10 border-[#2B8AC8]`,
  toggledCtn: `flex flex-col gap-[0.5rem]`,
  toggledCtnTxt: `font-normal text-base leading-[1.4rem] text-[#6E7187]`,
  toggledCtnTxtSec: `font-bold text-base leading-[1.4rem] text-[#110E2E]`,
  tableBodySymbol: `basis-3/12  h-full flex items-center self-center px-[0.87rem]`,
  tableBodyQuantity: `basis-2/12  self-center px-[0.87rem]`,
  tableBodyAmountBorrowed: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyLiquidationPrice: `basis-2/12 self-center px-[0.87rem]`,
  tableBodyStatus: `basis-3/12 self-center px-[0.87rem] flex items-center justify-between`,
  selectLogoCtn: `w-[3.8rem] h-[3.8rem] bg-[#2B8AC8] bg-opacity-[0.05] rounded-[0.37rem] flex flex-col items-center justify-center gap-[0.25rem]`,
  selectLogoTxt: `text-[0.75rem] font-medium tracking-[0.018rem] bg-clip-text text-transparent bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA] `,
  symbolCtn: `flex gap-[1.39rem] ml-[2.19rem]`,
  symbolText: `text-base leading-[1.4rem] font-normal`,
  quantityText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#A4ACD1]`,
  amountBorrowedText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#110E2E]`,
  liquidationPriceText: `text-[1.1rem] leading-[1.75rem] font-extrabold text-[#2A9DBD]`,
  statusContainer: `w-[9.6rem] h-fit flex flex-col gap-[0.94rem]`,
  statusCtn: `w-full flex items-center justify-between`,
  statusText: `text-[0.82rem] font-light text-[#110E2E] leading-[0.87rem]`,
  statusTextSafe: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#7FD7A4]`,
  statusTextStable: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#2586C5]`,
  statusTextRisk: `uppercase leading-[0.87rem] tracking-[0.062rem] font-medium text-[0.82rem] text-[#D1CA7B]`,
  statusBar: `flex`,
  dropDownArrow: `flex`,
  listNavContainer: `w-fit flex items-center gap-[0.69rem] mx-auto mt-[5rem]`,
  navContainer: `flex items-center gap-[0.69rem]`,
  listNavArrow: ``,
  listNavText: `text-base font-medium text-center text-[#110E2E]`,
  listPage: `w-[2.18rem] h-[2.18rem] text-base font-medium p-[0.31rem] text-center text-[#110E2E]`,
  listActivePage: `w-[2.18rem] h-[2.18rem] rounded-[0.25rem] text-base font-medium p-[0.31rem] text-center text-[#fff] bg-gradient-to-b from-[#449ECF] to-[#68BCC7] to-[#76C9BC] to-[#7BD2AA]`,
};

const OpenDebtTable = () => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeadContainer}>
          <div className={styles.tableHeadSymbol}>
            <span>Symbol</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadQuantity}>
            <span>Quantity</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadAmountBorrowed}>
            <span>Amount Borrowed</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadLiquidationPrice}>
            <span>Liquidation Price</span>
            <Image
              src={arrowDownLogo}
              alt="arrowDownLogo"
              width={10}
              height={6}
            />
          </div>
          <div className={styles.tableHeadStatus}>
            <span>Status</span>
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
              <div className={styles.tableBodySymbol}>
                <div className={styles.selectLogoCtn}>
                  <Image src={checkLogo} alt="checkLogo" width={23} />
                  <div className={styles.selectLogoTxt}>Select</div>
                </div>
                <div className={styles.symbolCtn}>
                  <Image src={teslaLogo} alt="teslaLogo" width={25} />
                  <div className={styles.symbolText}>TSLA</div>
                </div>
              </div>
              <div className={styles.tableBodyQuantity}>
                <div className={styles.quantityText}>140.00</div>
              </div>
              <div className={styles.tableBodyAmountBorrowed}>
                <div className={styles.amountBorrowedText}>$20,000.00</div>
              </div>
              <div className={styles.tableBodyLiquidationPrice}>
                <div className={styles.liquidationPriceText}>$178.57</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusContainer}>
                  <div className={styles.statusCtn}>
                    <div className={styles.statusText}>Status:</div>
                    <div className={styles.statusTextSafe}>SAFE</div>
                  </div>
                  <div className={styles.statusBar}>
                    <Image src={statusSafe} alt="statusSafe" width={155} />
                  </div>
                </div>
                <div className={styles.dropDownArrow}>
                  <Image
                    src={dropDownArrowDown}
                    alt="dropDownArrowDown"
                    width={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableItemWrapper}>
            <div className={styles.tableBodyContainerToggled}>
              <div className={styles.tableBodySymbol}>
                <div className={styles.selectLogoCtn}>
                  <Image src={checkLogo} alt="checkLogo" width={23} />
                  <div className={styles.selectLogoTxt}>Select</div>
                </div>
                <div className={styles.symbolCtn}>
                  <Image src={ethLogo} alt="ethLogo" width={25} />
                  <div className={styles.symbolText}>ETH</div>
                </div>
              </div>
              <div className={styles.tableBodyQuantity}>
                <div className={styles.quantityText}>7.69</div>
              </div>
              <div className={styles.tableBodyAmountBorrowed}>
                <div className={styles.amountBorrowedText}>$5000.00</div>
              </div>
              <div className={styles.tableBodyLiquidationPrice}>
                <div className={styles.liquidationPriceText}>$975.29</div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.statusContainer}>
                  <div className={styles.statusCtn}>
                    <div className={styles.statusText}>Status:</div>
                    <div className={styles.statusTextStable}>STABLE</div>
                  </div>
                  <div className={styles.statusBar}>
                    <Image src={statusStable} alt="statusSafe" width={155} />
                  </div>
                </div>
                <div className={styles.dropDownArrow}>
                  <Image
                    src={dropDownArrowDown}
                    alt="dropDownArrowDown"
                    width={18}
                  />
                </div>
              </div>
            </div>
            <div className={styles.toggledContainer}>
              <div className={styles.tableBodySymbol}></div>
              <div className={styles.tableBodyQuantity}>
                <div className={styles.toggledCtn}>
                  <div className={styles.toggledCtnTxt}>Quantity</div>
                  <div className={styles.toggledCtnTxtSec}>7.69</div>
                </div>
              </div>
              <div className={styles.tableBodyAmountBorrowed}>
                <div className={styles.toggledCtn}>
                  <div className={styles.toggledCtnTxt}>Amount Borrowed</div>
                  <div className={styles.toggledCtnTxtSec}>$ 5,000.00</div>
                </div>
              </div>
              <div className={styles.tableBodyLiquidationPrice}>
                <div className={styles.toggledCtn}>
                  <div className={styles.toggledCtnTxt}>Transaction Date</div>
                  <div className={styles.toggledCtnTxtSec}>3 August 2022</div>
                </div>
              </div>
              <div className={styles.tableBodyStatus}>
                <div className={styles.toggledCtn}>
                  <div className={styles.toggledCtnTxt}>Time</div>
                  <div className={styles.toggledCtnTxtSec}>10:32 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySymbol}>
              <div className={styles.selectLogoCtn}>
                <Image src={checkLogo} alt="checkLogo" width={23} />
                <div className={styles.selectLogoTxt}>Select</div>
              </div>
              <div className={styles.symbolCtn}>
                <Image src={vanguardLogo} alt="vanguardLogo" width={25} />
                <div className={styles.symbolText}>VOO</div>
              </div>
            </div>
            <div className={styles.tableBodyQuantity}>
              <div className={styles.quantityText}>160.00</div>
            </div>
            <div className={styles.tableBodyAmountBorrowed}>
              <div className={styles.amountBorrowedText}>$45,000.00</div>
            </div>
            <div className={styles.tableBodyLiquidationPrice}>
              <div className={styles.liquidationPriceText}>$312.00</div>
            </div>
            <div className={styles.tableBodyStatus}>
              <div className={styles.statusContainer}>
                <div className={styles.statusCtn}>
                  <div className={styles.statusText}>Status:</div>
                  <div className={styles.statusTextSafe}>SAFE</div>
                </div>
                <div className={styles.statusBar}>
                  <Image src={statusSafe} alt="statusSafe" width={155} />
                </div>
              </div>
              <div className={styles.dropDownArrow}>
                <Image
                  src={dropDownArrowDown}
                  alt="dropDownArrowDown"
                  width={18}
                />
              </div>
            </div>
          </div>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySymbol}>
              <div className={styles.selectLogoCtn}>
                <Image src={checkLogo} alt="checkLogo" width={23} />
                <div className={styles.selectLogoTxt}>Select</div>
              </div>
              <div className={styles.symbolCtn}>
                <Image src={bitcoinLogo} alt="bitcoinLogo" width={25} />
                <div className={styles.symbolText}>BTC</div>
              </div>
            </div>
            <div className={styles.tableBodyQuantity}>
              <div className={styles.quantityText}>0.77</div>
            </div>
            <div className={styles.tableBodyAmountBorrowed}>
              <div className={styles.amountBorrowedText}>$10,000.00</div>
            </div>
            <div className={styles.tableBodyLiquidationPrice}>
              <div className={styles.liquidationPriceText}>$16,233.77</div>
            </div>
            <div className={styles.tableBodyStatus}>
              <div className={styles.statusContainer}>
                <div className={styles.statusCtn}>
                  <div className={styles.statusText}>Status:</div>
                  <div className={styles.statusTextSafe}>RISK</div>
                </div>
                <div className={styles.statusBar}>
                  <Image src={statusRisk} alt="statusSafe" width={155} />
                </div>
              </div>
              <div className={styles.dropDownArrow}>
                <Image
                  src={dropDownArrowDown}
                  alt="dropDownArrowDown"
                  width={18}
                />
              </div>
            </div>
          </div>
          <div className={styles.tableBodyContainer}>
            <div className={styles.tableBodySymbol}>
              <div className={styles.selectLogoCtn}>
                <Image src={checkLogo} alt="checkLogo" width={23} />
                <div className={styles.selectLogoTxt}>Select</div>
              </div>
              <div className={styles.symbolCtn}>
                <Image src={appleLogo} alt="appleLogo" width={25} />
                <div className={styles.symbolText}>AAPL</div>
              </div>
            </div>
            <div className={styles.tableBodyQuantity}>
              <div className={styles.quantityText}>170.00</div>
            </div>
            <div className={styles.tableBodyAmountBorrowed}>
              <div className={styles.amountBorrowedText}>$20,000.00</div>
            </div>
            <div className={styles.tableBodyLiquidationPrice}>
              <div className={styles.liquidationPriceText}>$178.57</div>
            </div>
            <div className={styles.tableBodyStatus}>
              <div className={styles.statusContainer}>
                <div className={styles.statusCtn}>
                  <div className={styles.statusText}>Status:</div>
                  <div className={styles.statusTextSafe}>SAFE</div>
                </div>
                <div className={styles.statusBar}>
                  <Image src={statusSafe} alt="statusSafe" width={155} />
                </div>
              </div>
              <div className={styles.dropDownArrow}>
                <Image
                  src={dropDownArrowDown}
                  alt="dropDownArrowDown"
                  width={18}
                />
              </div>
            </div>
          </div>
          <div className={styles.listNavContainer}>
            <div className={styles.navContainer}>
              <div className={styles.listNavArrow}>
                <Image
                  src={listNavArrowLeft}
                  alt="listNavArrowLeft"
                  width={6}
                />
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
    </div>
  );
};

export default OpenDebtTable;
