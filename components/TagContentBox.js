import React from 'react';


import TagBox from './TagBox';

const contentBox={
  display:"flex",
  width:"95%",
  height:"95%",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignContent:"flex-start",
  flexWrap:"wrap",
}

const container={
  display:"flex",
  width:"100%",
  height:"500px",
  backgroundColor:"#B0A7A7",
  borderRadius:"7px",
  justifyContent:"center",
  alignItems:"center",


}


//도서 검색 페이지의 컨텐츠 표시부에 위치한 태그를 담는 컨테이너
const TagContentBox=(props)=>{
  const tags=["공포","로맨스","사랑","멜로","호러","수사","모순","비극","역사","실화","감동"]

  function getTag(tag){
    props.onDataUpdate(tag);
  }
  return(
    <div style={container}>
      <div style={contentBox}>
        {tags.map((item,index)=>(
          <TagBox
          key={index} 
          tagName={item}
          onData={getTag}></TagBox>
          
        ))}
      </div>

    </div>
  );
}


export default TagContentBox;