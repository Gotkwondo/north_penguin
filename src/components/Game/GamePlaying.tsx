import styled from 'styled-components';
import React, { useState } from 'react';
import GameDisplay from 'components/modules/Game/GameDisplay';

const GamePlaying = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <GameContentArea>
      <CanvasArea>
        { 
          start ?
            <GameDisplay start={true} />
            :
            <StartButton onClick={() => setStart(true)}>START</StartButton>
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

const StartButton = styled.div`
  width: 100%;
  height: 50%;
  font-weight: 800;
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export default GamePlaying;