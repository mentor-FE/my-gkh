
import Link from 'next/link'

const BuhFree = () => {
  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
      Бесплатные консультации
      </h3>
      <p className='indent-5 lg:text-xl lg:leading-8'>
      В Налоговый Кодекс РФ ежегодно вносятся множество изменений, позиции налоговых органов по схожим, казалось устоявшимся, вопросам также могут меняться. Всё это, как и прочие сопутствующие факторы, возлагают на лицо, занимающееся ведением бухгалтерского учёта, не малую ответственность.
        </p>
      <div className='mt-6'>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        Чтобы избежать штрафов и быть в курсе последних изменений – наша организация предлагает Вам бесплатную бухгалтерскую помощь, а именно:
        <ul className="ml-6">
          <li className="list-disc">Анализ документов организации;</li>
          <li className="list-disc">Оперативное доведение изменений законодательства;</li>
          <li className="list-disc">Помощь в выборе системы налогооблажения;</li>
          <li className="list-disc">Консультации по текущим вопросам.</li>
        </ul>
        </p>
      </div>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Подробнее о системе приглашений можно узнать, связавшись с нами.
        Информация для связи размещена в разделе{' '}
        <Link href='/contacts'>"Контакты"</Link>.
      </p>
    </article>
  )
}

export default BuhFree
