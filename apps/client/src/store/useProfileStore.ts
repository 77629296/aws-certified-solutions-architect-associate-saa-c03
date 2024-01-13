import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import createIdbStorage from './lib/createIdbStorage';

type Profile = {
  userName: string
}

interface ProfileState {
  currentProfile: null | Profile;
  setCurrentProfile: (currentProfile: null | Profile) => void;
}

export const useProfileStore = create(
  persist<ProfileState>(
    (set) => ({
      currentProfile: null,
      setCurrentProfile: (currentProfile) => set(() => ({ currentProfile }))
    }),
    {
      name: 'profileStore',
      storage: createIdbStorage()
    }
  )
);

export default useProfileStore;
