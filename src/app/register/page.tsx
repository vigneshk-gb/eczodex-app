import React from "react";

import RegisterForm from "./components/RegisterForm";
import HeroLoginSignup from "@/components/hero/HeroLoginSignup";

const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
};

const Login = () => {
  return (
    <div className={styles.assetWrapper}>
      <RegisterForm />
      <HeroLoginSignup />
    </div>
  );
};

export default Login;
