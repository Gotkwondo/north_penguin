import React from 'react';
import styled from 'styled-components';
import TestingImg from 'assets/Images/TestingImg.jpg';
import Walk from 'assets/Images/Walk.gif'
import IconBody from 'components/modules/IconBody';
import BackgroundIMG from 'components/modules/BackgroundIMG';
import WaveSVG from 'assets/WaveSVG.svg';
import Penguin from 'assets/Images/Crouch.png';

const HomeContent = () => {
  return (
    <ContentArea>
      <RowFlexBox>
        <BackgroundIMG imgurl={WaveSVG} height={100}>
          <ColumnFlexBox>
            <IconBody width={50} height={50} IconUrl={Penguin}></IconBody>
          </ColumnFlexBox>
          
          <ColumnFlexBox>
            <SubTitleArea>아....</SubTitleArea>
            <SubTitleArea>낮잠을 자다가....</SubTitleArea>
            <SubTitleArea>북극에 와버렸다!!</SubTitleArea>
          </ColumnFlexBox>
        
        </BackgroundIMG>
      </RowFlexBox>
      
      <RowFlexBox>
        <ImgContent IconUrl={Walk} width={90} height={90} />
        <ColumnFlexBox>
          <SubTitleArea>펭과 함께 떠나는</SubTitleArea>
          <SubTitleArea>남극으로의 여정</SubTitleArea>
        </ColumnFlexBox>
      </RowFlexBox>
    </ContentArea>
  )
}

const ContentArea = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`

const ImgContent = styled(IconBody)`
  position: relative; // 이미지 위에 텍스트를 띄우기 위한 position
  background-size: cover;
`

// const TitleArea = styled.div`
//   position: absolute; // 이미지 위에 텍스트를 띄우기 위한 position
//   width: calc(100% - 2rem);
//   font-size: 5em;
// `

const ColumnFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const RowFlexBox = styled.div`
  width: 100%;
  height: 90dvh;
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  @media (max-width: 7200px){
    height: 70dvh;
  }
  @media (max-width: 460px){
    height: 50dvh;
  }
`

const SubTitleArea = styled.div`
  width: 100%;
  font-size: 4em;
  margin-bottom: 2%;
  @media (max-width: 720px){
    font-size: 30px;
  };
  @media (max-width: 490px){
    font-size: 20px;
  };
`

export default HomeContent;