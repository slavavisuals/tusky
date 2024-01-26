import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tusky app',
  description:
    'Tusky is a compact yet robust full-stack application designed for managing everyday tasks seamlessly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-6xl px-8 py-20 mx-auto'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
