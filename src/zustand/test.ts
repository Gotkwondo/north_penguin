import { create } from 'zustand';

export const useTestStore = create<{
  cnt: number
  actions: {
    increase: () => void
    decrease: () => void
    update: (newCnt: number) => void
  }
}>((set) => ({
  cnt: 0,
  actions: {
    increase: () => set(state => ({ cnt: state.cnt + 1 })),
    decrease: () => set(state => ({ cnt: state.cnt - 1 })),
    update: (newCnt) => set({cnt: newCnt}),
  }
}))