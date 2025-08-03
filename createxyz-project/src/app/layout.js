import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'noxability',
  description: 'Made by nox',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-TbdR6+sIWB0Bvph/0UQK2EJbOZa7Kx2DyQx0I3Zb1WRFzH1g+2Xq3+zZcLOO8ULP4axI6pPaP0ZZIPAPHiHE4g=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
