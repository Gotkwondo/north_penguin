import React from 'react'
import styled from 'styled-components';

interface NavBarInterface {
  text: string
}

const NavBar = ({ text }: NavBarInterface) => {
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
  background-color: #e2e0e0;
`

export default NavBar;