import styled from 'styled-components';
import React, { RefObject, useEffect, useRef } from 'react';
import { useCanvas } from 'hooks/useCanvas';
import kaplay from 'kaplay';
import { useClientWidthHeight } from 'hooks/useClientWidthHeight';

interface GamePlayingPropsInterface {
  canvasWidth: number,
  canvasHeight: number
}

const GamePlaying = ({canvasWidth, canvasHeight}: GamePlayingPropsInterface) => {
  const mainRef = useRef(null)
  const test = useRef(null);
  useEffect(() => {
    if (test.current) {
      kaplay({
        canvas: test.current,
      })
    }
  }, [])
  
  return (
    <GameContentArea ref={mainRef}>
      {/* <GameCanvas className='test' ref={canvasRef} /> */}
      <canvas width='100%' height='50%' ref={test}></canvas>
    </GameContentArea>
  )
}

const GameContentArea = styled.div`
  width: 100%;
  height: 80vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameCanvas = styled.canvas`
  /* width: 100%;
  height: 50%; */
`


export default GamePlaying;