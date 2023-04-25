import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount';
import ButtonSignUp from '../components/ButtonSignUp';
import ForgotAccount from '../components/ForgotAccount';
import mypage from './mypage';

const loginPage = () => {
  return (
    <div>
      <BookStagramTopLogo/>
      <div>
        <form>
          <InputId/>
          <InputPwd/>
        </form>
      </div>
      <ButtonLogin/>
      
      <div></div>
      <div>
        <ButtonSignUpWithGoogle/>
        <ButtonSignUpWithAppleAccount/>
        <ButtonSignUp/>
        <ForgotAccount/>
        <mypage/>
      </div>
    </div>
  );
};

export default loginPage;