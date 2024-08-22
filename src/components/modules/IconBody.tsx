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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img<{ width: number, height: number, src: string }>`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  src: ${props => props.src};
`

export default IconBody;