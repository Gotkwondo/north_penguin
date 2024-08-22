import React from 'react';
import IconBody from 'components/modules/IconBody';
import Crouch from 'assets/Images/Crouch.png';
import styled from 'styled-components';
import HeaderBlock from './HeaderBlock';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <HeaderBody>
      <IconArea to={'/'}>
        <IconBody width={100} height={100} IconUrl={Crouch} />
      </IconArea>
      <NavArea>
        <HeaderBlock text={"Play"} />
        <HeaderBlock text={"Ranking"} />
        <HeaderBlock text={"Developer"} />
      </NavArea>
      <LoginStateArea text='Login State'/>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  background-color: aliceblue;
  margin-bottom: 2rem;
`

const IconArea = styled(Link)`
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

const LoginStateArea = styled(HeaderBlock)`
  width: calc(8rem - 20px);
  height: 100%;
  padding: 0 10px 0 5px;
`

export default Header;