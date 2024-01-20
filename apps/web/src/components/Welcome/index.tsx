import type { FC } from 'react';

import styles from './Welcome.module.scss'

const Welcome: FC = () => {
  return (
    <div className={styles.welcome}>
      Welcome
    </div>
  );
};

export default Welcome;
