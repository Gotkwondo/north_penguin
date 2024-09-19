import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useKaplay } from 'hooks/useKaplay';
import { KAPLAYCtx } from 'kaplay';
import { useUserState } from 'zustand/userState';

interface GameDisplayInterface{
  start: boolean
}

const GameDisplay = ({start}: GameDisplayInterface) => {
  const test: React.MutableRefObject<null> = useRef(null);
  const [instance, setInstance] = useState<KAPLAYCtx<{}, string> | null>(null);
  const { topScore, setTopScore } = useUserState(); // 최대 점수 측정을 위한 Zustand
  // 여기서 측정된 점수는 Ranking 페이지에서 활용해 업로드할지 판단후 업로드

  useEffect(() => {
    if (test.current && start && !instance) {
      setInstance(useKaplay(test, start, setTopScore));
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
