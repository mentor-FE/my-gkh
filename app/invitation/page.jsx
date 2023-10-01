const Invitation = () => {
  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
        Система приглашений в рамках услуги
      </h3>
      <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
        "Заполнение информации на web-сайтах ГИС ЖКХ"
      </h3>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Данной системой приглашений могут воспользоваться организации, которые
        желают заключить с нами договор на оказание услуг{' '}
        <Link href='/'>по заполнению информации на web-сайтах ГИС ЖКХ</Link>.
      </p>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Система бонусов крайне проста – если Вы рекомендуете нас новым клиентам,
        и они заключают с нашей организацией договор, Вы получаете постоянную
        скидку. Размер скидки обсуждается отдельно в каждом случае.
      </p>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Моё ЖКХ оставляет за собой право в любой момент приостановить данную
        систему.
      </p>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Скидки, полученные в период действия системы приглашений, не отменяются.
      </p>
      <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
        Подробнее о системе приглашений можно узнать, связавшись с нами.
        Информация для связи размещена в разделе{' '}
        <Link href='/contacts'>"Контакты"</Link>.
      </p>
    </article>
  )
}

export default Invitation
