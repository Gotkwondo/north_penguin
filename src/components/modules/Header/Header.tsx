import React from 'react';
import IconBody from 'components/modules/IconBody';
import Crouch from 'assets/Images/Crouch.png';
import styled from 'styled-components';

const Header = () => {

  return (
    <>
      <HeaderBody>
        <IconArea>
          <IconBody width={50} height={50} IconUrl={ Crouch } />
        </IconArea>
        <InfoArea>
          d
        </InfoArea>
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
  background-color: bisque;
`

const IconArea = styled.div`
  width: 3rem;
  height: 100%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoArea = styled.div`
  width: 50rem;
  height: 100%;
  background-color: blue;
`

const LoginStateArea = styled.div`
  width: 10rem;
  height: 100%;
  background-color: aliceblue;
`

const NavBar = styled.div`
  
`

export default Header;