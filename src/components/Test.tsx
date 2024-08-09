import React from 'react'
import walking from 'assets/Images/Crouch.png'
import { useTestStore } from 'zustand/test'

interface TestInter{
  text: string
}

const Test = ({ text }: TestInter) => {
  const { cnt, actions } = useTestStore();
  // console.log(cnt)
  return (
    <>
      {cnt}
      <img src={walking} alt="walk" />
      <button onClick={() => {
        actions.increase()
      }}>increase</button>
      <button onClick={() => {
        actions.decrease()
      }}>decrease</button>
      <button onClick={() => actions.update(100)}>100</button>
      <button onClick={() => actions.update(0)}>0</button>
    </>
  )
}

export default Test;