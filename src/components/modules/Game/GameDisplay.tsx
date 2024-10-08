import kaplay from 'kaplay'
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Walk from 'assets/Images/Walk.gif';
import { useKaplay } from 'hooks/useKaplay';

interface GameDisplayInterface {
  player: string
}

const GameDisplay = () => { 
  const test: React.MutableRefObject<null> = useRef(null);
  let k;
  
  useEffect(() => {
    if (test.current) {
      console.log(typeof test, test)
      // k = kaplay({
      //   canvas: test.current,
      //   root: test.current
      // })
      // k.loadSprite("Penguein", Walk);
      // k.setBackground(141, 183, 255);
      // k.scene("game", () => {
      //   k.setGravity(2400);
      // })
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
