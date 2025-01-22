import './globals.css'
import { Inter } from 'next/font/google'
import   App   from './Components/ParticleBg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cosmic Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#070415]`}>
        <div className="fixed inset-0 bg-[#070415] z-[-2]">
          {/* Background glow effect */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
        </div>
        <div className="fixed inset-0 z-[-1]">
          <App />
        </div>
        {children}
      </body>
    </html>
  )
}

