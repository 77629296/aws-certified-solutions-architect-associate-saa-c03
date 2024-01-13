import type { FC } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalModalStateStore } from '@/store/useGlobalModalStateStore';

import Login from './Login';

const GlobalModals: FC = () => {
  const showAuthModal = useGlobalModalStateStore(
    (state) => state.showAuthModal
  );
  const setShowAuthModal = useGlobalModalStateStore(
    (state) => state.setShowAuthModal
  );
  return (
    <>
      <Dialog
        onClose={() => setShowAuthModal(false)}
        open={showAuthModal}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Login
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setShowAuthModal(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Login />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalModals;
