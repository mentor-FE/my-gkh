import Link from 'next/link'

import home from '@/public/style/home.png'
import contact from '@/public/style/contact.png'
// import blog from '@/public/style/blog.png'
import about from '@/public/style/about.png'
import sendrep from '@/public/style/sendrep.png'

const Nav = () => {
  return (
    <nav className='flex justify-center bg-[#fff5ee] rounded-3xl mt-2 py-2'>
      <div
        className='max-w-[1240px] flex flex-grow flex-wrap justify-evenly gap-2'
      >
        <Link
          href='/'
          className='flex justify-around items-center bg-white rounded-lg p-1  min-w-[130px]
        smm:px-2
        sml:px-4
        sm:gap-4 
        lg:px-3
    '
        >
          <img
            src={home.src}
            alt='home'
            className='
          sm:block w-10
          lg:w-14
    '
          />
          <span className='text-lg lg:text-3xl'>Главная</span>
        </Link>
        <Link
          href='/contacts'
          className='flex justify-around items-center bg-white rounded-lg p-1 min-w-[130px]
        smm:px-2
        sml:px-4
        sm:gap-4 
        lg:px-3
  '
        >
          <img
            src={contact.src}
            alt='contacts'
            className='
          sm:block w-10
          lg:w-14
    '
          />
          <span className='text-lg lg:text-3xl'>Контакты</span>
        </Link>
        {/* <Link
          href='/blog'
          className='flex justify-around items-center bg-white rounded-lg p-1 min-w-[130px]
        smm:px-2
        sml:px-4
        sm:gap-4 
        lg:px-3
  '
        >
          <img
            src={blog.src}
            alt='blog'
            className='
          sm:block w-10
          lg:w-14
    '
          />
          <span className='text-lg lg:text-3xl'>Блог</span>
        </Link> */}
        <Link
          href='/about'
          className='flex justify-around items-center bg-white rounded-lg p-1 min-w-[130px]
        smm:px-2
        sml:px-4
        sm:gap-4 
        lg:px-3
  '
        >
          <img
            src={about.src}
            alt='about'
            className='
          sm:block w-10
          lg:w-14
    '
          />
          <span className='text-lg lg:text-3xl'>О проекте</span>
        </Link>
        <Link
          href='/pay'
          className='flex justify-around items-center bg-white rounded-lg p-1 min-w-[130px]
        smm:px-2
        sml:px-4
        sm:gap-4 
        lg:px-3
  '
        >
          <img
            src={sendrep.src}
            alt='pay'
            className='
          sm:block w-10
          lg:w-14
    '
          />
          <span className='text-lg lg:text-3xl'>Оплатить ЖКУ</span>
        </Link>
      </div>

      {/* <Link href='/benefits'>benefits</Link> */}
    </nav>
  )
}


export default Nav