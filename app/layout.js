import '@/app/_styles/globals.css';
import Logo from './_components/logo';

export const metadata = {
  title: 'DL Video Inspiration Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
