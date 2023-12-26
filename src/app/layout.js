import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '../../store/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Commutify',
  description: 'Creating easiness for customers to travel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
