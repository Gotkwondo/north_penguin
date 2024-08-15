import Header from 'components/modules/Header/Header';
import HomeContent from 'components/Home/HomeContent';
import React from 'react'

const HomePage = () => {
  

  return (
    <>
      <Header />
      <HomeContent
        titleText={'고향으로 가기 위한 펭귄의 여행'}
        subTitleText={'남극에서 북극까지'}
      />
    </>
  )
}

export default HomePage;