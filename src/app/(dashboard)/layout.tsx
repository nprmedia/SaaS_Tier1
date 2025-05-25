import type { ReactNode } from 'react';
import DashboardHeader from '@/components/global/DashboardHeader';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <main className="pt-20 px-6">{children}</main>
    </>
  );
}
