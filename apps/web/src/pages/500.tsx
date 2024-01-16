import type { FC } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Custom500: FC = () => {
  return (
    <div className='page-center flex-col'>
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Looks like something went wrong!
        </h1>
        <Link href="/">
          <Button variant="contained">Go to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom500;
