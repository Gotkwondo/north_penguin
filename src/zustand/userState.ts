import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface UserStateInterface{
  topScore: number,
  setTopScore: (newScore: number) => void
}

export const useUserState = create(
  persist<UserStateInterface>(
    (set) => ({
      topScore: 0,
      setTopScore: (newScore) => set(state => ({ topScore: Math.max(newScore, state.topScore) })),
    }),
    {
      name: 'userState'
    }
  )
)