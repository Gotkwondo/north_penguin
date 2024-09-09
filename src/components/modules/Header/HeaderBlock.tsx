import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderBlockInterface {
  text: string,
  needReload: boolean,
}

const HeaderBlock = ({ text, needReload }: HeaderBlockInterface) => {
  const urlText = text.toLowerCase();
  return (
    <NavBlock>
      {
        needReload ?
          <ATagBlock href={`/${urlText}`}>
            {text}
          </ATagBlock> :
          <LinkBlock to={`/${urlText}`}>
            {text}
          </LinkBlock>
      }
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
`;

const LinkBlock = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 800;
`

const ATagBlock = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 800;
`

export default HeaderBlock;