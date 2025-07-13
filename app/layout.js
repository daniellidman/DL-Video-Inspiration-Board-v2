import '@/app/_styles/globals.css';
import Logo from './_components/logo';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'DL Video Inspiration Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <header className="flex flex-row justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/new">
            <button className="m-6 text-xl font-bold text-white">+</button>
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
