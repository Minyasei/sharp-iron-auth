'use client';

import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#EA0029_0%,_black_65%)]'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className='text-white text-lg'> A simple authentication service </p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
