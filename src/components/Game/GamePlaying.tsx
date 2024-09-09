import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import GameDisplay from 'components/modules/Game/GameDisplay';

const GamePlaying = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <GameContentArea>
      <CanvasArea>
        { 
          start ? <GameDisplay /> : <Test onClick={() => setStart(true)}>ddd</Test>
        }
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

const Test = styled.div`
  width: 100%;
`

export default GamePlaying;