import React from 'react';
import styled from 'styled-components';

interface BackgroundIMGInterface{
  imgurl: string,
  height: number,
  children: React.ReactNode,
}

/**
 * 배경 이미지 지정한 뒤 이미지 위에 컴포넌트를 Children 컴포넌트를 렌더링
 * @param {imgurl: string, height: string(vh), children: React.ReactNode}
 * @returns 
 */
const BackgroundIMG = ({imgurl, height, children}: BackgroundIMGInterface) => {
  return (
    <Area height={height}>
      <Background imgurl={imgurl}>
        {children}
      </Background>
    </Area>
  )
};
const Area = styled.div<{height: number}>`
  width: 100%;
  height: ${props => props.height}dvh;
  position: relative;
  @media (max-width: 460px) {
    height: ${props => props.height / 2}dvh;
  }
`

const Background = styled.div<{ imgurl: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${props => props.imgurl});
  /* background-repeat: no-repeat; */
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

export default BackgroundIMG;