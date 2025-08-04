import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vyxlez Portfolio',
  description: 'I am a passionate Roblox developer specializing in creating engaging games and experiences. With years of experience in building, modeling, and scripting, I bring creative visions to life in the Roblox platform. I love crafting unique gameplay mechanics and stunning visual environments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/vyxlogotrans.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
