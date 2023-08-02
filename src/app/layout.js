import Navbar from '@/components/Navbar';
import './globals.css';
import { nunitoSans } from '@/utils/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
