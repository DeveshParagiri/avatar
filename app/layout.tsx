import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import Footer from '@/components/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Paragiri',
  description: 'Dev"\s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth' id='home'>
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 h-[3500px] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-gray-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[2rem] sm:w-[68.75rem] dark:bg-[#5ffae316]'></div>
        <div className='bg-gray-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c6cdffa0]'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}