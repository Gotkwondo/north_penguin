import React from 'react'
import walking from 'assets/Images/Crouch.png'

interface TestInter{
  text: string
}

const Test = ({ text }: TestInter) => {
  return (
    <>
      {text}
      <img src={walking} alt="walk" />
    </>
  )
}

export default Test;