import '@/app/_styles/globals.css';
import Logo from './_components/logo';
import Image from 'next/image';

export const metadata = {
  title: 'DL Video Inspiration Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <header className="flex flex-row justify-between">
          <Logo />
          {/* <button className="m-6 text-xl font-bold text-white">+</button> */}
          <div className="mr-4 content-center">
            <Image
              alt="edit"
              src="/edit.png"
              width="20"
              height="20"
              className="m-2 inline"
            />
            <Image
              alt="new"
              src="/new.png"
              width="20"
              height="20"
              className="m-2 inline"
            />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
