import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useKaplay } from 'hooks/useKaplay';

const GameDisplay = () => {
  const test: React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    if (test.current) {
      const instance = useKaplay(test);
    }
  }, []);

  return (
    <CanvasContainer>
      <GameCanvas ref={test}></GameCanvas>
    </CanvasContainer>
  )
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 50%;
`;

const GameCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export default GameDisplay;
