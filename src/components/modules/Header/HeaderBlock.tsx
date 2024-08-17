import React from 'react'
import styled from 'styled-components';

interface HeaderBlockInterface {
  text: string
}

const HeaderBlock = ({ text }: HeaderBlockInterface) => {
  return (
    <NavBlock>
      {text}
    </NavBlock>
  )
};

const NavBlock = styled.div`
  width: 15rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default HeaderBlock;