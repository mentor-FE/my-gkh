
import Link from 'next/link'
const Submission = () => {
  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
      Сдача отчетов
      </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
      В Налоговый Кодекс РФ ежегодно вносятся множество изменений, позиции налоговых органов по схожим, казалось устоявшимся, вопросам также могут меняться. Всё это, как и прочие сопутствующие факторы, возлагают на лицо, занимающееся ведением бухгалтерского учёта, не малую ответственность.
        </p>
      <div className='mt-6'>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        Большое количество времени в работе бухгалтера забирает сдача многочисленных отчётов в многочисленные органы. Мы готовы Вам помочь в данном вопросе и взять данную проблему на себя. За Вас мы сдадим отчёты в следующие органы:
        <ul className="ml-6">
          <li className="list-disc">ФСС;</li>
          <li className="list-disc">ПФР;</li>
          <li className="list-disc">ФНС;</li>
          <li className="list-disc">Росстат</li>
        </ul>
        </p>
      </div>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
         Данной бонусной системой могут воспользоваться юридические лица, которые заключили с нами договор на оказание услуги
        <Link href='/'>Заполнение информации на web-сайтах ГИС ЖКХ.</Link>.
      </p>
    </article>
  )
}

export default Submission
