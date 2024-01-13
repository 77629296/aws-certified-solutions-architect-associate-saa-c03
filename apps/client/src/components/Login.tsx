import type { FC } from 'react';
import Button from '@mui/material/Button';
import ArrowRightAltOutlined from '@mui/icons-material/ArrowRightAltOutlined';
import { useState } from 'react';

const Login: FC = () => {
  return (
    <div className="p-5">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Sign in to your account</h2>
        <h6>
          <span className="opacity-75">Don't have an account?</span>
          <Button className="px-1.5">
            Create one now
            <ArrowRightAltOutlined className="ml-1" />
          </Button>
        </h6>
      </div>
    </div>
  )
}
export default Login
