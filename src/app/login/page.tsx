import React from 'react'
import Sidebar from "@/components/sidebar/Sidebar";
import LoginForm from './components/LoginForm';
import HeroLoginSignup from '@/components/hero/HeroLoginSignup';



const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
};

const Login  = () => {
  return (
    <div className={styles.assetWrapper}>
      <LoginForm/>
      <HeroLoginSignup/>
  </div>
  )
}

export default Login 