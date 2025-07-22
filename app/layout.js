import '@/app/_styles/globals.css';
import Logo from './_components/logo';
import Image from 'next/image';
import Link from 'next/link';
import { SupabaseProvider } from './_lib/supabase-provider';
import AddNew from './_components/AddNew';

export const metadata = {
  title: 'DL Video Inspiration Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <SupabaseProvider>
          <header className="flex flex-row justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <AddNew />
          </header>
          <main>{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
