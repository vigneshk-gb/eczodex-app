import React from 'react'

import HeroLoginSignup from '@/components/hero/HeroLoginSignup';
import ResetForm from './components/ResetForm';
import AuthenticatorForm from './components/AuthenticatorForm';
import VerifyForm from './components/VerifyForm';
import ConfirmReset from './components/ConfirmReset';
import SetNewPassword from './components/SetNewPassword';



const styles = {
  assetWrapper: `w-[85%] h-fit mx-auto flex`,
};

const Reset  = () => {
  return (
    <div className={styles.assetWrapper}>
      <ResetForm/>
      {/* <AuthenticatorForm/> */}
      {/* <VerifyForm/> */}
      {/* <ConfirmReset/> */}
      {/* <SetNewPassword/> */}
      <HeroLoginSignup/>
  </div>
  )
}

export default Reset 