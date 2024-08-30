import styled from 'styled-components';
import React, { RefObject, useEffect, useRef } from 'react';
import { useCanvas } from 'hooks/useCanvas';

interface GamePlayingPropsInterface {
  canvasWidth: number,
  canvasHeight: number
}

const GamePlaying = ({ canvasWidth, canvasHeight }: GamePlayingPropsInterface) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight);

  return (
    <GameContentArea>
      <GameCanvas ref={canvasRef} />
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