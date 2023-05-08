// ! 팔로워(구독인) 리스트 컴포넌트
import React from 'react';
import ImgUserPicture from './JK-ImgUserPicture'
import UserName from './JK-UserName'
import ButtonCancle from './JK-ButtonCancle';
const conStyle = {
  height: '631px'
}
const ListStyle = {
  width: '357px',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px'
}
// 임시로 컴포넌트들을 조합하여 화면에 표현하였다.
// ! 추후 DB에서 데이터를 불러와 수정 예정
const FollowerList = () => {
  return (
    <div style={conStyle}>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
    </div>
  );
};
export default FollowerList;