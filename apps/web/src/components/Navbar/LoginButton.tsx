import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import type { FC } from 'react';

import { useGlobalModalStateStore } from '@/store/useGlobalModalStateStore';

const LoginButton: FC= () => {
  const setShowAuthModal = useGlobalModalStateStore(
    (state) => state.setShowAuthModal
  );

  return (
    <Button
      variant="outlined"
      style={{
        color: 'white'
      }}
      startIcon={<LoginIcon />}
      onClick={() => {
        setShowAuthModal(true);
      }}
    >Login</Button>
  );
};

export default LoginButton;
