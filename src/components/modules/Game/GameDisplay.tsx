import kaplay, { KAPLAYCtx } from 'kaplay'
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Walk from 'assets/Images/Walk.gif';
import { useKaplay } from 'hooks/useKaplay';

interface GameDisplayInterface {
  player: string
}

const GameDisplay = () => { 
  const test: React.MutableRefObject<null> = useRef(null);
  
  useEffect(() => {
    if (test.current) {
      useKaplay(test)
    }
  }, []);
  return (
    <CanvasContainer>
      <GameCanvas ref={test}></GameCanvas>
    </CanvasContainer>
  )
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 50%;
`

const GameCanvas = styled.canvas``;

export default GameDisplay;
