import GamePlaying from 'components/Game/GamePlaying';
import Header from 'components/modules/Header/Header';
import React, { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDetectPlayPageStore } from 'zustand/pageState';

const GamePlayingPage = () => {
  const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { isGamePage, yesGamePage, noGamePage } = useDetectPlayPageStore();
  
  useEffect(() => {
    if (!isGamePage) {
      yesGamePage();
      window.location.reload();
    }
    return () => {
      noGamePage();
    }
  }, []);

  return (
    <PlayingPage>
      <Header />
      <GameDisplayArea ref={mainRef}>
        <GamePlaying />
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