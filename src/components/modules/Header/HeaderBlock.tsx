import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderBlockInterface {
  text: string
}

const HeaderBlock = ({ text }: HeaderBlockInterface) => {
  const urlText = text.toLowerCase();
  return (
    <NavBlock>
      <Link to={`/${urlText}`}>
        {text}
      </Link>
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