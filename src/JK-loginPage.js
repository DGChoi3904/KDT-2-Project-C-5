
import React, { useState } from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount';
import ButtonSignUp from '../components/ButtonSignUp';
import ForgotAccount from '../components/ForgotAccount';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // useHistory가 업데이트되어 useNavigate로 변경됨.
import SignUp from './signUp';

const loginPage = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    // 기본 제출 이벤트 방지
    event.preventDefault();
    const data = { id, pwd };
    console.log(data);
    // const form = event.target;
    // const formData = new FormData(form);
    // console.log(formData);
    fetch('/login', {
      // HTTP 요청 메서드 지정
      method: 'POST',
      // HTTP 요청 헤더 지정
      // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
      headers: { 'Content-Type': 'application/json' },
      // HTTP 요청 본문에 담을 데이터를 지정
      // id, pwd를 JSON 형태의 문자열로 변환하여 본문에 보냄
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          console.log('login succeeded', result);
          sessionStorage.setItem('sessionID', result.sessionId);
          sessionStorage.setItem('userID', result.userId); // 사용자 ID 저장
          navigate("/mainFeed");
        } else {
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // 에러 처리 로직 추가
      });
  };


  const container={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    height:"80%",

  }

  const btnBox={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    height:"125px"
  }

  const flex={
    display:"flex",
    justifyContent:"space-around",
    flexDirection:"column",
    height:"300px"
  }

  return (
    <div style={container}>
      <BookStagramTopLogo />
      <div>
        <form onSubmit={handleLogin} style={flex}>
          <InputId value={id} onChange={(e) => setId(e.target.value)} />
          <p><b>password</b></p>
          <InputPwd value={pwd} onChange={(e) => setPwd(e.target.value)} />
          <ButtonLogin />
        </form>
      </div>
      <div style={btnBox}>
        <ButtonSignUpWithGoogle />
        <ButtonSignUpWithAppleAccount />
        <Link to="/signUp">
          <ButtonSignUp />
        </Link>
        <ForgotAccount />
      </div>
    </div>
  );
};
export default loginPage