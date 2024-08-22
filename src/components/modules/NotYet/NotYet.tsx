import React from 'react'
import styled from 'styled-components'


const NotYet = () => {

  return (
    <TextArea>
      <TitleText>
        We Will Back Soon
      </TitleText>
      <TitleText>
        아직 미구현된 페이지입니다
      </TitleText>
    </TextArea>
  )
}

const TextArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  font-size: 5rem;
`

export default NotYet;