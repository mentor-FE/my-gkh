import Link from 'next/link'

const HeaderMobile = () => {
  return (
    <div className='bg-gradient-to-t from-slate-200 to-white sm:hidden'>
      <div className='text-center text-6xl py-8'>Моё ЖКХ</div>
      <div className='flex flex-col px-2 pb-2 text-xl gap-2'>
        <div className=''>
          Ваш помощник в борьбе с бюрократией в сфере жилищно-коммунального
          хозяйства
        </div>

        <div className=''>
          Готовы оказать помощь и поддержку в любом направлении сферы ЖКХ
        </div>
        <div className=''>
          Имеются вопросы? Зайдите в раздел{' '}
          <Link href='/contacts' className='underline text-sky-700'>
            Контакты
          </Link>
        </div>
        <div className=''>
          <div className='cursor-pointer'>
            Сайт:{' '}
            <Link href='/' className=''>
              www.my-gkh.org{' '}
            </Link>
          </div>

          <div className='cursor-pointer'>
            E-mail: <a href='mailto:maxim.che@inbox.ru'>maxim.che@inbox.ru</a>
          </div>

          <div className='cursor-pointer'>
            Тел. <a href='tel:89649206545'>8-964-920-65-45</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile