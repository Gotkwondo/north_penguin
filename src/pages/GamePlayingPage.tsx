import GamePlaying from 'components/Game/GamePlaying';
import Header from 'components/modules/Header/Header';
import { useClientWidthHeight } from 'hooks/useClientWidthHeight';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const GamePlayingPage = () => {
  const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const clientRect = useClientWidthHeight(mainRef);
  const [canvasWidth, canvasHeight] = [clientRect.width, clientRect.height]
  // const [canvasWidth, setCanvasWidth] = useState(0);
  // const [canvasHeight, setCanvasHeight] = useState(0);

  // useEffect(() => {
  //   setCanvasWidth(clientRect.width);
  //   setCanvasHeight(clientRect.height);
  //   console.log(clientRect)
  // }, [clientRect])
  return (
    <PlayingPage>
      <Header />
      <GameDisplayArea ref={mainRef}>
        <GamePlaying canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
      </GameDisplayArea>
    </PlayingPage>
  )
}

const PlayingPage = styled.div`
  width: 100%;
`

const GameDisplayArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default GamePlayingPage;