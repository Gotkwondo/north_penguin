import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useKaplay } from 'hooks/useKaplay';
import { KAPLAYCtx } from 'kaplay';

interface GameDisplayInterface{
  start: boolean
}

const GameDisplay = ({start}: GameDisplayInterface) => {
  const test: React.MutableRefObject<null> = useRef(null);
  const [instance, setInstance] = useState<KAPLAYCtx<{}, string> | null>(null);

  useEffect(() => {
    if (test.current && start && !instance) {
      setInstance(useKaplay(test, start));
    }
  }, [start]);

  return (
    <CanvasContainer>
      <GameCanvas ref={test}></GameCanvas>
    </CanvasContainer>
  )
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 70%;
`;

const GameCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export default GameDisplay;
