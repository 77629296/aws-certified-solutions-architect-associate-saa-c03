import { create } from 'zustand';

interface GlobalModalState {
  setShowAuthModal: (showAuthModal: boolean) => void;
  showAuthModal: boolean;
}

export const useGlobalModalStateStore = create<GlobalModalState>((set) => ({
  setShowAuthModal: (showAuthModal) => set(() => ({ showAuthModal })),
  showAuthModal: false,
}));
