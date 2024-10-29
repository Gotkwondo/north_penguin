import React from 'react';
import styled from 'styled-components';
import TestingImg from 'assets/Images/TestingImg.jpg';
import Walk from 'assets/Images/Walk.gif'
import IconBody from 'components/modules/IconBody';
import BackgroundIMG from 'components/modules/BackgroundIMG';
// import { ReactComponent as WavelSVG } from 'assets/wave.svg';
import WaveSVG from 'assets/WaveSVG.svg';


interface HomeContentInterface {
  imgUrl?: string
  titleText?: string
  subTitleText?: string
}

const HomeContent = () => {
  return (
    <ContentArea>
      <ImgContent IconUrl={Walk} width={50} height={100} />
      <MessageArea>
        <SubTitleArea>펭과 함께 떠나는</SubTitleArea>
        <SubTitleArea>남극으로의 여정</SubTitleArea>
      </MessageArea>
      <BackgroundIMG imgurl={WaveSVG} height={"120"}>
        <div>d</div>
        <div>aa</div>
      </BackgroundIMG>
      
    </ContentArea>
  )
}

const ContentArea = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ImgContent = styled(IconBody)`
  position: relative; // 이미지 위에 텍스트를 띄우기 위한 position
  background-size: cover;
`

const TitleArea = styled.div`
  position: absolute; // 이미지 위에 텍스트를 띄우기 위한 position
  width: calc(100% - 2rem);
  font-size: 5em;
`

const MessageArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`

const SubTitleArea = styled.div`
  width: 100%;
  font-size: 4em;
  margin-bottom: 2%;
`

export default HomeContent;