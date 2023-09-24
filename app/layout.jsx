import { TheHeader } from '@/components/header/TheHeader'
import './globals.css'
import { Oswald } from 'next/font/google'
import { TheFooter } from '@/components/TheFooter'
import bg from '@/public/style/background-site.jpg'

const oswald = Oswald({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'My GKH',
  description: 'Моё ЖКХ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        <div
          className=''
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <div className='min-h-screen container mx-auto flex flex-col justify-between 2xl:px-28 '>
            <TheHeader />
            <main className='flex-auto'>{children}</main>
            <TheFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
