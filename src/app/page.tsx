"use client";
import React, { useEffect, useState } from "react";
import HeroHome from "@/components/hero/HeroHome";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEczodexContext } from "@/context/eczodex-context";
import Image from "next/image";

const styles = {
  appWrapper: `w-full h-fit flex`,
  dummyContainer: `w-full max-w-[22.43rem] h-screen rounded-r-[1rem] appearence-none max-xl:hidden`,
};

export default function Home() {
  const { theme, setTheme } = useEczodexContext();

  const [bearerToken, setBearerToken] = useState<string | null>();

  useEffect(() => {
    const getBearerToken = async () => {
      const response = await fetch(
        "https://eczodex-webapi.azurewebsites.net/Auth/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: "string", password: "123123" }),
        }
      );

      console.log(response, "👀");
      // const result = await response.json();
      // console.log(result)
      // setBearerToken(result?.token)
    };
    // getBearerToken();
  }, []);

  useEffect(() => {
    console.log(bearerToken, "🤡🤡");
  }, [bearerToken]);

  const getDigitalAssets = async () => {
    let url =
      "https://eczodex-webapi.azurewebsites.net/BusinessLogicData/DigitalAssets";
    let bearer = "Bearer" + bearerToken;
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.dummyContainer}></div>
      <Sidebar />
      <HeroHome />
    </div>
  );
}
