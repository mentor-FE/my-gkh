import Link from 'next/link'
import logo from '@/public/style/logo-top.jpg'

const HeaderDesctop = () => {
  return (
          <div
          className='hidden sm:block h-[205px] md:h-[246px] lg:h-[327px] xl:h-[409px] 2xl:h-[420px]'
          style={{
            backgroundImage: `url(${logo.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            borderRadius: '25px',
          }}
        >
          <div
            className='px-2 pt-2 
          md:px-4 md:pt-5
          xl:px-8 xl:pt-8
          '
          >
            <div
              className='text-2xl mb-6 
            md:text-4xl lg:text-6xl
            xl:mb-10
            2xl:text-7xl
            '
            >
              Моё ЖКХ
            </div>
            <div
              className='text-[10px] flex flex-col gap-2 
            md:text-xs 
            lg:text-base lg:gap-3
            xl:text-xl
            2xl:text-xl
            '
            >
              <p>
                Ваш помощник в борьбе с бюрократией в сфере жилищно-коммунального
                хозяйства
              </p>
              <p className='ml-5 2xl:ml-10'>
                Готовы оказать помощь и поддержку в любом направлении сферы ЖКХ
              </p>
              <p
                className='ml-10 
              lg:ml-14
              2xl:ml-24
              '
              >
                Имеются вопросы? Зайдите в раздел{' '}
                <Link href='/contacts' className='underline text-sky-700'>
                  Контакты
                </Link>
              </p>
            </div>
            <div
              className='text-3xl mt-[21px] ml-[77px]
            md:mt-[29px]
            lg:text-5xl lg:ml-[100px] lg:mt-[35px]
            xl:ml-[120px] xl:mt-[60px]
            2xl:text-6xl 2xl:ml-[135px] 2xl:mt-[50px]
            '
            >
              <p>Вместе мы можем многое</p>
            </div>
            <div
              className='text-[10px] mt-[6px] ml-[123px] text-white flex gap-1
            md:mt-[15px] md:ml-[140px]
            lg:text-base lg:mt-[17px] lg:ml-[192px]
            xl:ml-[230px] xl:mt-[32px]
            2xl:text-xl 2xl:ml-[240px] 2xl:mt-[25px]
            '
            >
              <div className='cursor-pointer'>
                Сайт:{' '}
                <Link href='/' className=''>
                  www.my-gkh.org{' '}
                </Link>
              </div>
  
              <div className='cursor-pointer'>
                | E-mail:{' '}
                <a href='mailto:maxim.che@inbox.ru'>maxim.che@inbox.ru</a>
              </div>
  
              <div className='cursor-pointer'>
                | Тел. <a href='tel:89649206545'>8-964-920-65-45</a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeaderDesctop