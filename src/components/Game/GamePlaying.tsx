import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import GameDisplay from 'components/modules/Game/GameDisplay';

const GamePlaying = () => {
  return (
    <GameContentArea>
      <CanvasArea>
        <GameDisplay />
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default GamePlaying;