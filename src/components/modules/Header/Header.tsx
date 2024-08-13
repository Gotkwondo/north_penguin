import React from 'react';
import IconBody from 'components/modules/IconBody';
import Crouch from 'assets/Images/Crouch.png';
import styled from 'styled-components';
import NavBar from './NavBar';

const Header = () => {

  return (
    <HeaderBody>
      <IconArea>
        <IconBody width={100} height={100} IconUrl={Crouch} />
      </IconArea>
      <NavArea>
        <NavBar text={"Play"} />
        <NavBar text={"Ranking"} />
        <NavBar text={"Developer"} />
      </NavArea>
      <LoginStateArea>
        ( Login State )
      </LoginStateArea>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  background-color: aliceblue;
`

const IconArea = styled.div`
  width: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const NavArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`

const LoginStateArea = styled.div`
  width: calc(8rem - 20px);
  height: calc(100% - 20px);
  padding: 10px;
`

export default Header;