import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { Loading } from "@/libs/ui-lib"
import SideBar from '../SideBar';
import styles from './Layout.module.scss'


interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const profileLoading = false;

  if (profileLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
