import React, {useState} from 'react'

import Profile from '../components/Profile';
import MypageTopBar from '../components/MypageTopBar';
//마이페이지를 담당하는 컴포넌트, 네비게이션 바 맨 오른쪽 클릭시 이동됨
const mypage=()=>{

  return(
    <div>
      
      <MypageTopBar></MypageTopBar>
      <Profile></Profile>
      
    </div>
  );
}

export default mypage;


