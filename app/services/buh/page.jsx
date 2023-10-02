import Link from 'next/link'
import CardPrice from "@/components/cardPrice/cardPrice"
import buh from '@/public/style/buh-1.png'
import buh2 from '@/public/style/buh-2.png'
import buh3 from '@/public/style/buh-3.png'
import buh4 from '@/public/style/buh-4.png'
import buh5 from '@/public/style/buh-5.png'
import buh6 from '@/public/style/buh-6.png'
import buh7 from '@/public/style/buh-7.png'
import buh8 from '@/public/style/buh-8.png'
import buh9 from '@/public/style/buh-9.png'
import buh10 from '@/public/style/buh-10.png'
import buh11 from '@/public/style/buh-11.png'
import house1 from '@/public/style/house-1.png'
import house2 from '@/public/style/house-2.png'
import house3 from '@/public/style/house-3.png'
import house4 from '@/public/style/house-4.png'
import house5 from '@/public/style/house-5.png'


const Buh = () => {
  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <h3 className='text-center text-2xl font-bold mb-3 lg:text-2xl mt-10'>
        Введение
      </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
        Ни одно юридическое лицо не может обойтись без квалифицированной
        бухгалтерской поддержки. Многочисленные отчеты, подсчёт «дебита и
        кредита», оформление расчётов по договорам и сделкам – всё это
        ежедневная работа бухгалтера.
      </p>
      <p className='indent-5 lg:text-xl lg:leading-8'>
        Мы готовы Вам оказать услуги по ведению бухгалтерского учёта Вашей
        организации. В услугу входит:
      </p>
      <div className='grid md:grid-cols-2 md:gap-6 mt-10'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh.src} alt='buh' />
          Ведение бухгалтерского учёта организации.
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh2.src} alt='buh2' />
          Оптимизация расходов, рекомендация более выгодных контрагентов.
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh3.src} alt='buh3' />
          Ведение учёта производим на собственном ПО (1С Бухгалтерия), потому
          Вам нести затраты на покупку и обновление нет необходимости.
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh4.src} alt='buh4' />
          Участвуем с Вами во всех проверках, готовим документы.
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh5.src} alt='buh5' />
          Готовим годовой отчёт о проделанной работе, отчет ревизионной комиссии
          (для ТСЖ, ТСН, ЖСК и т.п. при желании Заказчика).
        </div>
      </div>

      <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl mt-10'>
        1. Почему мы выгоднее штатного бухгалтера?
      </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
        Вот лишь несколько аргументов:
      </p>

      <div className='grid md:grid-cols-2 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh6.src} alt='buh6' />
          Вы за нас не платите налоги – мы работаем с Вами по договору оказания
          услуг, оплата нашего труда фиксирована его условиями, налоги с нас мы
          платим сами.
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh7.src} alt='buh7' />
          Мы не ходим в отпуск - договор оказания услуг не обязываем Вас
          предоставлять нам отпуск, Вас обслуживает наша команда бухгалтеров,
          которые ходят в отпуск по очереди.
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 md:mt-5'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh8.src} alt='buh8' />
          Мы не болеем – по той же причине, по которой не ходим в отпуск.
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh9.src} alt='buh9' />
          Мы не требуем от Вас покупки (обновления) ПО, оплаты курсов повышения
          квалификации, покупки обучающей литературы и прочих подобных трат –
          все это мы приобретаем за собственные денежные средства, а полученные
          знания применяем в работе с Вами.
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 mt-10'>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh10.src} alt='buh10' />
          Мы не занимаем рабочее место у вас, а, следовательно, и его аттестацию
          – работая с Вами по договору услуг данные вопросы мы также решаем
          самостоятельно.
        </div>
        <div className='w-full mb-6 group flex items-center gap-4 shadow-lg p-2 rounded-lg'>
          <img src={buh11.src} alt='buh11' />И самое главное – мы не употребляем
          следующие слова и выражения: «я не могу», «я не буду», «у меня не
          получается» и прочие аналогичные словосочетания с производными от
          приведённых глаголов.{' '}
        </div>
      </div>
      <h3 className='text-center text-xl font-bold mb-3 mt-10 lg:text-2xl'>
        2. Стоимость наших услуг по ведению бухгалтерского учёта.
      </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
        Данный параметр зависит от размера жилищного фонда, который находится в
        управлении организации.
      </p>

      <div className='grid gap-3 sml:grid-cols-2 lg:grid-cols-4 mt-10'>
        <CardPrice img={house1} price='3500' flets='До 60' />
        <CardPrice img={house2} price='6000' flets='От 61 до 100' />
        <CardPrice img={house3} price='8000' flets='От 101 до 150' />
        <CardPrice img={house4} price='10000' flets='От 151' />
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <img src={house5.src} alt="" />
        <p className='text-xs my-10 md:text-lg'>
          Для управляющих компаний и других организаций условия ценообразования уточняются индивидуально.
        </p>
        <img src={house5.src} alt="" />
      </div>
     

    </article>
  )
}

export default Buh
