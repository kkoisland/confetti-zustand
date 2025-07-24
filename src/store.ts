import { create } from 'zustand';

type ConfettiState = {
  show: boolean;
  trigger: () => void;
  reset: () => void;
};

// Zustandのstoreフックを定義：状態(show)とアクション(trigger/reset)を含む
export const useConfettiStore = create<ConfettiState>((set) => ({
  show: false,
  trigger: () => set({ show: true }),
  reset: () => set({ show: false }),
}));
