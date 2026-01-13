import { Header } from './header';
import { Footer } from './footer';
import { ReactNode } from 'react';

export function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
