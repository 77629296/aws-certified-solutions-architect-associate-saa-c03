import type { FC } from 'react';
import { Logo } from '@/components/Common/Logo';

const Welcome: FC = () => {
  return (
    <div className="divider py-12">
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-5 py-8 sm:py-12">
        <Logo />
        <div className="flex-1 space-y-1 tracking-tight sm:max-w-lg">
          <div className="text-2xl font-extrabold sm:text-5xl">
            Welcome gpt4free,
          </div>
          <div className="ld-text-gray-500 text-2xl font-extrabold sm:text-5xl">
            a free chatgpt app
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
