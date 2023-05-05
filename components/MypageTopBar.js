import React from 'react';
import HambergerMenu from './HambergerMenu';


const topBox={
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"

}
//마이페이지 상단 알림,햄버거 메뉴 바
const mypageTopBar=()=>{

  return(
    <div style={topBox}>
      <div>📃</div>
      <HambergerMenu></HambergerMenu>

    </div>

  );
}


export default mypageTopBar;