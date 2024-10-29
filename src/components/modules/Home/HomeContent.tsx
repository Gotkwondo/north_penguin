import React from 'react';
import styled from 'styled-components';
import TestingImg from 'assets/Images/TestingImg.jpg';
import Walk from 'assets/Images/Walk.gif'
import IconBody from 'components/modules/IconBody';
import {ReactComponent as WavelSVG} from 'assets/wave.svg'


interface HomeContentInterface {
  imgUrl?: string
  titleText?: string
  subTitleText?: string
}

const HomeContent = () => {
  return (
    <ContentArea>
      {/* <TitleArea>제목</TitleArea> */}
      <ImgContent IconUrl={Walk} width={50} height={100} />
      <MessageArea>
        <SubTitleArea>펭과 함께 떠나는</SubTitleArea>
        <SubTitleArea>남극으로의 여정</SubTitleArea>
      </MessageArea>
      {/* <ImgContent src={imgUrl} /> */}
      <div style={{ position: 'relative', width: '100%' }}>
        ddd
        <WavelSVG />
        dd
      </div>
      
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
  /* top: 1rem; */
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