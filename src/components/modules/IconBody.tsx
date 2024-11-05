import React from 'react';
import styled from 'styled-components';

interface IconBodyInterface {
  width: number
  height: number
  IconUrl: string
}

const IconBody = ({ width, height, IconUrl }: IconBodyInterface) => {
  return (
    <IconArea className='IconBody'>
      <Img src={IconUrl} width={width} height={height} />
    </IconArea>
  )
}

const IconArea = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 50px; */
`

const Img = styled.img<{ width: number, height: number, src: string }>`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  src: ${props => props.src};
  @media (max-width: 720px){
    height: calc(${props => props.height} / 2);
  }
`

export default IconBody;