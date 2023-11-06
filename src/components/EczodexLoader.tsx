import React from "react";
import { Oval } from "react-loader-spinner";
import Image from "next/image";

import eczodexLogo from "../../public/Icons/eczodex-logo-main.svg";
import useWindowDimensions from "@/app/hooks/useWindowDimensions ";

const styles = {
  loader: `relative w-[6.3rem] h-[6.3rem] flex items-center justify-center`,
  logo: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`,
};

const EczodexLoader = () => {
    const { width: breakPointWidth } = useWindowDimensions();

  return (
    <div className={styles.loader}>
      <Oval
        height={breakPointWidth < 768 ? 50: 80}
        width={breakPointWidth < 768 ? 50: 80}
        color="#5EBC8B"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#5EBC8B50"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
      <div className={styles.logo}>
        <Image src={eczodexLogo} alt="eczodexLogo" width={breakPointWidth < 768 ? 34: 64} height={breakPointWidth < 768 ? 34: 64} />
      </div>
    </div>
  );
};

export default EczodexLoader;
