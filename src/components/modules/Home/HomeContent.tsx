import React from 'react';
import styled from 'styled-components';
import TestingImg from 'assets/Images/TestingImg.jpg';
import Walk from 'assets/Images/Walk.gif'
import IconBody from 'components/modules/IconBody';

interface HomeContentInterface {
  imgUrl?: string
  titleText?: string
  subTitleText?: string
}

const HomeContent = ({ imgUrl, titleText, subTitleText }: HomeContentInterface) => {
  return (
    <ContentArea>
      <TitleArea>
        {titleText}
      </TitleArea>
      <SubTitleArea>
        {subTitleText}
      </SubTitleArea>
      <ImgContent IconUrl={Walk} width={50} height={100}/>
      {/* <ImgContent src={imgUrl} /> */}
      
    </ContentArea>
  )
}

const ContentArea = styled.div`
  width: 100%;
  height: 60vh;
  font-size: 12px;
  display: flex;
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

const SubTitleArea = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  font-size: 4em;
  top: 40%;
  text-align: end;
`

export default HomeContent;