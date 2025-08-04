// src/app/layout.js or src/app/layout.jsx
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vyxlez Portfolio',
  description: 'Vyxlez Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/vyxlogotrans.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
