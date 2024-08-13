import React from 'react';
import IconBody from 'components/modules/IconBody';
import Crouch from 'assets/Images/Crouch.png';
import styled from 'styled-components';
import NavBar from './NavBar';

const Header = () => {

  return (
    <>
      <HeaderBody>
        <IconArea>
          <IconBody width={100} height={100} IconUrl={ Crouch } />
        </IconArea>
        <NavArea>
          <NavBar text={"Play"} />
          <NavBar text={"Ranking"} />
          <NavBar text={"Developer"} />
        </NavArea>
        <LoginStateArea>
          a
        </LoginStateArea>
      </HeaderBody>
    </>
  )
}

const HeaderBody = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const IconArea = styled.div`
  width: 3rem;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0px 0px 20px;
`

const NavArea = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
`

const LoginStateArea = styled.div`
  width: calc(10rem - 20px);
  height: calc(100% - 20px);
  border-radius: 0px 20px 20px 0px;
  /* background-color: aliceblue; */
  padding: 10px;
`

export default Header;