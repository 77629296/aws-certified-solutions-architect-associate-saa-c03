import type { FC, ReactNode } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Navbar } from '../Navbar';
import GlobalModals from '../GlobalModals';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const profileLoading = false;

  if (profileLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <GlobalModals />
      <div className="flex min-h-screen flex-col pb-14 md:pb-0">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
