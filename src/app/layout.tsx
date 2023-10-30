import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Featured from '@/components/Featured';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import QueryProvider from "@/components/QueryProvider";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Resturant App",
  description: "Best food in town!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <QueryProvider>
            <div>

              <NavBar />
              {children}
              <Footer />
              <Toaster />
            </div>

          </QueryProvider>
        </AuthProvider>


      </body>
    </html>
  )
}
