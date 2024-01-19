import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import type { FC } from 'react';

import { useGlobalModalStateStore } from '@/store/useGlobalModalStateStore';

import AuthTab from './Auth/AuthTab';

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
        <DialogContent dividers>
          <AuthTab />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalModals;
