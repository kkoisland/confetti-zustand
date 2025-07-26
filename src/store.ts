import { create } from 'zustand';

export type ConfettiSettings = {
  show: boolean;
  colors: string[];
  gravity: number;
  numberOfPieces: number;
  trigger: () => void;
  reset: () => void;
  setColors: (colors: string[]) => void;
  setGravity: (g: number) => void;
  setNumberOfPieces: (n: number) => void;
};

// Zustandのstoreフックを定義：状態とアクションを含む
export const useConfettiStore = create<ConfettiSettings>((set) => ({
  show: false,
  colors: [],
  gravity: 0.3,
  numberOfPieces: 200,
  trigger: () => set({ show: true }),
  reset: () => set({ show: false }),
  setColors: (colors) => set({ colors }),
  setGravity: (gravity) => set({ gravity }),
  setNumberOfPieces: (numberOfPieces) => set({ numberOfPieces }),
}));
