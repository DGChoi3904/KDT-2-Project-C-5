import React, { useState } from 'react';
import AddBook from './DJ-AddBook';
import ReviewInput from './DJ-ReviewInput';


const container={
  display:"flex",
  flexDirection:"column",
  width:"85%",
  height:"90%",
  borderRadius:"5px",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor:"#D9D9D9"
}

const box={
  display:"flex",
  width:"80%",
  height:"100%",
  flexDirection:"column",
  justifyContent:"space-around"

}

//리뷰 작성 페이지 내 도서 검색,리뷰 작성,태그,등록 등을 담당하는 컴포넌트
const WriteBox=()=>{
  const[fromData,setFormData]=useState({});//전송할 form 데이터 변수

  const handleInputChange=(event)=>{
    const {name,value}=event.target
  }


  return(
    <div style={container}>
      <div style={box}>
        
          <AddBook></AddBook>
          <ReviewInput></ReviewInput>
      </div>
    </div>

  );
}

export default WriteBox;