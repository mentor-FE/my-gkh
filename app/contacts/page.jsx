import telegram from '@/public/style/telegram.png'
import time from '@/public/style/time.png'
import viber from '@/public/style/viber.png'
import whatsapp from '@/public/style/whatsapp.png'
import phone from '@/public/style/phone.png'
import email from '@/public/style/email.png'
import office from '@/public/style/office.png'

const Contacts = () => {
  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <h1 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
        Контактная информация
      </h1>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Если Вас заинтересовали наши услуги, появились вопросы или предложения,
        Вы можете связаться с нами следующим образом:
      </p>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='mailto:maxim.che@inbox.ru'><img className='w-full' src={email.src} alt='email' /></a>
          <p>
            Написать письмо на наш e-mail адрес
            <a href='mailto:maxim.che@inbox.ru'> maxim.che@inbox.ru </a>
            Мы обязательно ответим.
          </p>
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='tel:89649206445'><img className='w-full' src={phone.src} alt='email' /></a>
          <p>
            Позвонить по номеру
            <a href='tel:89649206445'> 8-964-920-64-45 </a>и обсудить интересующие
            Вас вопросы, либо договориться о встрече.
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-3 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='#'><img className='w-full' src={telegram.src} alt='telegram' /></a>
        <p>
        Написать сообщение в telegram по номеру
            <a href='tel:89649206445'> 8-964-920-64-45 </a>
          </p>
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='#'><img className='w-full' src={whatsapp.src} alt='whatsapp' /></a>
          <p>
          Написать сообщение в telegram по номеру
            <a href='tel:89649206445'> 8-964-920-64-45 </a>
          </p>
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='#'><img className='w-full' src={viber.src} alt='viber' /></a>
          <p>
          Написать сообщение в viber по номеру
            <a href='tel:89649206445'> 8-964-920-64-45</a>
            
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='mailto:maxim.che@inbox.ru'><img className='w-full' src={office.src} alt='office' /></a>
          <p>
          Посетить наш офис, находящийся по адресу г. Ейск, ул. Армавирская, 45, офис 305 "А" с 9:00 часов до 18:00 часов (перерыв с 13:00 часов до 14:00 часов) в рабочие дни.
          </p>
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <a className='flex min-w-[60px]' href='tel:89649206445'><img className='w-full' src={time.src} alt='time' /></a>
          <p>
          Посетить наш офис по выше указанному адрес в любое другое время по предварительной договорённости, в том числе в выходные и праздничные дни.
          </p>
        </div>
      </div>

      <div className="grid mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.180077287456!2d38.28012791559945!3d46.70218137913505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e42ee772b4be2b%3A0x98fc858179c58dfc!2z0JDRgNC80LDQstC40YDRgdC60LDRjyDRg9C7LiwgNDUsINCV0LnRgdC6LCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUzNjgy!5e0!3m2!1sru!2sru!4v1537816546381"
        className="w-full h-[400px]" frameBorder="0" allowFullScreen=""></iframe>
       </div>

    </article>
  )
}

export default Contacts
