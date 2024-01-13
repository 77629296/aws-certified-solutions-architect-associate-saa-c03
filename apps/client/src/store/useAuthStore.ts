import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserDto {
  userName: string
}

interface AuthState {
  user: UserDto | null;
}

interface AuthActions {
  setUser: (user: UserDto | null) => void;
}

export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: "authStore" }
  )
);
