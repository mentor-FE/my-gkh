import Link from 'next/link'
import upr from '@/public/style/upr.png'
import reg from '@/public/style/reg_del-tsj.png'
import idin from '@/public/style/idin.png'
import sendrep from '@/public/style/sendrep.png'
import frcon from '@/public/style/frcon.png'
import regdel from '@/public/style/reg_del-tsj.png'
import egru from '@/public/style/edit_egru.png'
import congregation from '@/public/style/congregation.png'

const Sidebar = () => {
  return (
    <sidebar className='bg-[#fff5ee]  rounded-lg py-4 px-2 gap-4 hidden xl:flex flex-col  max-w-[333.56px]'>
      <div className='rounded-lg bg-white flex flex-col gap-4 pb-4'>
        <div className='bg-[#fa9d1c] rounded-t-lg h-16 flex justify-center items-center p-2 text-center'>
          Заполнение информации на web-сайтах ГИС ЖКХ и Реформа ЖКХ
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={upr.src} alt='upr' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/description'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Описание услуги
            </Link>
            <div className='text-sm'>
              В данном разделе подробно описаны условия оказания услуги
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={reg.src} alt='reg' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/company'
              className='text-center cursor-pointer underline text-[17px] mb-2 whitespace-nowrap'
            >
              Организации на обслуживании
            </Link>
            <div className='text-sm'>
              В данном разделе перечислены организации, обслуживанием которых
              занимается управляющий
            </div>
          </div>
        </div>

        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={idin.src} alt='upr' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/invitation'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Система приглашений
            </Link>
            <div className='text-sm'>
              В данном разделе описано, как Вы можете получить скидку на наши
              услуги путем привлечения новых клиентов
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-lg bg-white flex flex-col gap-4 pb-4'>
        <div className='bg-[#fa9d1c] rounded-t-lg h-16 flex justify-center items-center p-2 text-center'>
          Бухгалтерские услуги
        </div>

        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={upr.src} alt='upr' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/buh'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Описание услуги
            </Link>
            <div className='text-sm'>
              В данном разделе подробно описаны условия оказания услуги
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={sendrep.src} alt='sendrep' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/submission'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Сдача отчетов
            </Link>
            <div className='text-sm'>
              Сдадим за Вас отчеты в ФСС, ПФР, ФНС и Росстат, подробности
              читайте в разделе.
            </div>
          </div>
        </div>

        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={reg.src} alt='reg' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/buhInfo'
              className='text-center cursor-pointer underline text-[17px] mb-2 whitespace-nowrap'
            >
              Организации на обслуживании
            </Link>
            <div className='text-sm'>
              В данном разделе перечислены организации, заключившие договоры на
              оказание бухгалтерских услуг.
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={frcon.src} alt='frcon' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/buhFree'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Бесплатные консультации
            </Link>
            <div className='text-sm'>
              Необходимы советы и помощь в бухгалтерии? Мы можем помочь.
              Бесплатно. Подробности читайте в разделе.
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-lg bg-white flex flex-col gap-4 pb-4'>
        <div className='bg-[#fa9d1c] rounded-t-lg h-16 flex justify-center items-center p-2 text-center'>
          Прочии услуги
        </div>

        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={regdel.src} alt='regdel' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/reg'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Регистрация ТСЖ (ТСН)
            </Link>
            <div className='text-sm'>
              Хотите создать ТСЖ (ТСН) в Вашем доме, но не знаете с чего начать?
              Тогда данный раздел для Вас.
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={egru.src} alt='egru' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/edit'
              className='text-center cursor-pointer underline text-[17px] mb-2'
            >
              Внесение изменений в ЕГРЮЛ
            </Link>
            <div className='text-sm'>
              Хотите сменить председателя ТСЖ (ТСН)? Или внести изменения в
              устав организации? Мы Вам поможем.
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5dc] rounded-lg flex p-2 gap-2 items-start mx-2'>
          <img src={congregation.src} alt='congregation' />
          <div className='flex flex-col justify-center flex-grow'>
            <Link
              href='/services/sobranie'
              className='text-center cursor-pointer underline text-[17px] mb-2 whitespace-nowrap'
            >
              Проведение собраний
            </Link>
            <div className='text-sm'>
              Поможем провести общее собрание собственников помещений (членов
              ТСЖ (ТСН)) в Вашем многоквартирном доме и составить протокол
              собрания, соответствующий требованиям действующего
              законодательства.
            </div>
          </div>
        </div>
      </div>
    </sidebar>
  )
}

export default Sidebar
