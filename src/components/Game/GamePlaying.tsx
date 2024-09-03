import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import kaplay from 'kaplay';

const GamePlaying = () => {
  const mainRef = useRef(null)
  const test = useRef(null);
  useEffect(() => {
    if (test.current) {
      kaplay({
        canvas: test.current,
        root: test.current
      })
    }
  }, [])
  
  return (
    <GameContentArea ref={mainRef}>
      <CanvasArea>
        <GameCanvas ref={test}></GameCanvas>
      </CanvasArea>
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

const CanvasArea = styled.div`
  width: 100%;
  height: 50%;
`

const GameCanvas = styled.canvas``;


export default GamePlaying;