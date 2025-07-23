import { create } from 'zustand';

type Store = {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;

  quantity: number;
  setQuantity: (val: number) => void;

  step: 'settings' | 'result';
  setStep: (val: 'settings' | 'result') => void;
};

export const useStore = create<Store>((set) => ({
  isVisible: false,
  setIsVisible: (v) => set({ isVisible: v }),

  quantity: 0,
  setQuantity: (val) => set({ quantity: val }),

  step: 'settings',
  setStep: (val) => set({ step: val }),
}));
