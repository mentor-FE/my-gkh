import Link from 'next/link'
import admeysk from '@/public/style/adm-eysk.jpg'
import gis from '@/public/style/gis-jkh.jpg'
import nko from '@/public/style/header-logo.png'
import reformagkh from '@/public/style/reformagkh.png'

const SidebarInformer = () => {
  return (
    <sidebar className='bg-[#fff5ee] flex flex-col rounded-lg mt-2 py-4 px-2 gap-4'>
      <div className='rounded-lg bg-white flex flex-col gap-4 pb-4'>
        <div className='bg-[#fa9d1c] rounded-t-lg h-16 flex justify-center items-center p-2 text-center'>
          Информер
        </div>
        <div className='flex flex-col gap-2 justify-center items-center sm:flex-wrap sm:flex-row'>
          <div className='bg-[#f5f5dc] rounded-lg flex gap-2 border items-start mx-2 sm:max-w-[280px] sm:min-w-0'>
            <Link
              href='/'
              className='text-center cursor-pointer underline text-[17px] min-w-full'
            >
              <img
                src={admeysk.src}
                alt='admeysk'
                className='min-w-full rounded-lg'
              />
            </Link>
          </div>
          <div className='bg-[#f5f5dc] rounded-lg flex gap-2 border items-start mx-2 sm:max-w-[280px] sm:min-w-0'>
            <Link
              href='/'
              className='text-center cursor-pointer underline text-[17px] min-w-full'
            >
              <img src={gis.src} alt='gis' className='min-w-full rounded-lg' />
            </Link>
          </div>
          <div className='bg-[#f5f5dc] rounded-lg flex gap-2 border items-start mx-2 sm:max-w-[280px] sm:min-w-0'>
            <Link
              href='/'
              className='text-center cursor-pointer underline text-[17px] min-w-full'
            >
              <img src={nko.src} alt='nko' className='min-w-full rounded-lg' />
            </Link>
          </div>
          <div className='bg-[#f5f5dc] rounded-lg flex gap-2 border items-start mx-2 sm:max-w-[280px] sm:min-w-0'>
            <Link
              href='/'
              className='text-center cursor-pointer underline text-[17px] min-w-full bg-white'
            >
              <img
                src={reformagkh.src}
                alt='reformagkh'
                className='min-w-full rounded-lg'
              />
            </Link>
          </div>
        </div>
      </div>
    </sidebar>
  )
}

export default SidebarInformer
