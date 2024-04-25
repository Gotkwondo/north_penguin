import React from 'react'

interface TestInter{
  text: string
}

const Test = ({ text }: TestInter) => {
  return (
    <>
      {text}
    </>
  )
}

export default Test;