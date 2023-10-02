
import Link from 'next/link'
import newtsg1 from '@/public/style/new-tsg-1.png'
import newtsg2 from '@/public/style/new-tsg-2.png'
import newtsg3 from '@/public/style/new-tsg-3.png'
import newtsg4 from '@/public/style/new-tsg-4.png'
import newtsg5 from '@/public/style/new-tsg-5.png'
import newtsg6 from '@/public/style/new-tsg-6.png'
import newtsg7 from '@/public/style/new-tsg-7.png'
import boss from '@/public/style/boss-1.png'
import newtsg9 from '@/public/style/new-tsg-9.png'

const Reg = () => {

  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
    <h3 className='text-center text-2xl font-bold mb-3 lg:text-2xl mt-10'>
      Введение
    </h3>
    <p className='indent-5 lg:text-xl lg:leading-8'>
    ТСЖ (ТСН) (далее по тексту ТСЖ) как способ управление многоквартирным домом является наиболее популярным среди собственников помещений в многоквартирных домах ввиду его продуктивности и прозрачности в сравнении с управляющей компанией.
    </p>
    <p className='indent-5 lg:text-xl lg:leading-8'>
      Мы готовы Вам оказать услуги по ведению бухгалтерского учёта Вашей
      организации. В услугу входит:
    </p>

    <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl mt-10'>
    1. Что необходимо, чтобы создать в многоквартирном доме ТСЖ?
    </h3>
    <p className='indent-5 lg:text-xl lg:leading-8'>
    Самое главное и основное – это желание, остальное мы сделаем за Вас. В услугу по созданию ТСЖ входит:
    </p>

    <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl mt-10'>
    Основные услуги
    </h3>
    
    <div className='grid md:grid-cols-3 md:gap-6 mt-10'>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg1.src} alt='newtsg1' />
        Сбор актуальной информации о собственниках помещений по средствам Росреестра для проведения общего собрания;
      </div>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg2.src} alt='newtsg2' />
        Разработка первоначальной сметы доходов и расходов ТСЖ на текущий год (тарифа за техническое обслуживание);
      </div>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg3.src} alt='newtsg3' />
        Разработка Устава ТСЖ;
      </div>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mt-10'>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg4.src} alt='newtsg4' />
        Подготовка всей необходимой документации для проведение учредительного собрания собственников помещений в многоквартирном доме по созданию ТСЖ;
        </div>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg5.src} alt='newtsg5' />
        Подсчёт голосов и составления протокола собрания в окончательном виде;
        </div>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mt-10'>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg6.src} alt='newtsg6' />
        Составление сопроводительных писем в адрес ранее управлявшей домом организации;
        </div>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg7.src} alt='newtsg7' />
        Регистрация ТСЖ как юридического лица в налоговой.
        </div>
    </div>

    <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl mt-10'>
    Дополнительные услуги
    </h3>
    
    <div className='grid md:grid-cols-2 md:gap-6 mt-10'>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={boss.src} alt='boss' />
        Отстаивание позиции по вопросу законности создания ТСЖ и составления протокола общего собрания в надзорных органах и (или) суде в случае поступления жалобы со стороны «недовольных» собственников и (или) организации ранее управлявшей домом;
      </div>
      <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
        <img src={newtsg9.src} alt='newtsg9' />
        Рекомендации в выборе контрагентов, банка, системы налогообложения и прочих организационных моментов.</div>
    </div>

      <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl mt-10'>
      2. Сколько стоит услуга?
    </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
      Мы готовы предложить два способа создания ТСЖ с участием наших специалистов.
      </p>

      <div className='mt-6'>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        Бесплатно! Да, именно так. Если Вы в дальнейшем, после создания в Вашем доме ТСЖ, переходите к нам на обслуживание и заключаете с нами договор об оказании одной из следующих услуг:
        <ul className="ml-6 mt-6">
          <li className="list-disc"><Link href='#'>Заполнение информации на web-сайтах ГИС ЖКХ;</Link></li>
          <li className="list-disc"><Link href='#'>Бухгалтерские услуги.</Link></li>
        </ul>
        </p>
      </div>
      <p className='indent-5 lg:text-xl lg:leading-8 mt-6'>
      то мы с Вас не берем платы за нашу работу по созданию ТСЖ, Вы оплачиваете только госпошлину в размере 4000 рублей и электронная подпись для регистрации организации онлайн в размере 500 рублей.
      </p>
      
      <p className='indent-5 lg:text-xl lg:leading-8 mt-6'>
        За деньги! Ну тут, вроде бы, должно быть понятно. Если Вы хотите, чтобы наши специалисты провели только создании ТСЖ в Вашем доме, а дальнейшую его работу Вы хотите осуществлять без нашей помощи, тогда стоимость услуги составит:
        </p>
      
      <div className='mt-6 lg:text-xl'>

        <ul className="ml-6">
          <li className="list-disc">100 рублей с квартиры + 2000 рублей – услуги по составлению документов и проведению собрания;</li>
          <li className="list-disc">4000 рублей – госпошлина для регистрации ТСЖ в налоговом органе;</li>
          <li className="list-disc">500 рублей – электронная подпись для регистрации ТСЖ онлайн.</li>
          <li className="">Итого, создание ТСЖ в сто квартирном доме обойдется 16500 рублей.</li>
        </ul>

      </div>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8 mt-6'>
        Подробнее о системе приглашений можно узнать, связавшись с нами.
        Информация для связи размещена в разделе{' '}
        <Link className="text-sky-700" href='/contacts'>"Контакты"</Link>.
      </p>
  </article>
  )
}

export default Reg
