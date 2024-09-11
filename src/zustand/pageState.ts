import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DetectPlayPageInterface{
  isGamePage: boolean | null,
  yesGamePage: () => void,
  noGamePage: () => void
}

export const useDetectPlayPageStore = create(
  persist<DetectPlayPageInterface>(
    (set) => ({
      isGamePage: null,
      yesGamePage: () => set(state => ({ isGamePage: true })),
      noGamePage: () => set(state => ({ isGamePage: false })),
    }
    ),
    {
      name: 'checkGamePage'
    }
  ));