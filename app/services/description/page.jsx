
import Link from 'next/link'

const Description = () => {

  return (
    <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
      <div className=''>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          Введение
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          Организации, занятые обслуживанием многоквартирных домом, обязаны
          заполнять информацию на web-сайте www.dom.gosuslugi.ru (ГИС ЖКХ). В
          связи с чем, предлагаем подробно разобраться в данном вопросе.
        </p>
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          1. На основании каких нормативных документов возникает обязанность
          заполнять информацию на сайтах ГИС ЖКХ?
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          Обязанность заполнять информацию на ГИС ЖКХ предусмотрена п. 10.1 ст.
          161 ЖК РФ и Федеральным законом от 21.07.2014 №209-ФЗ "О
          государственной информационной системе жилищно-коммунального
          хозяйства".
        </p>
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          2. Должно ли ТСЖ (ТСН, ЖСК и т.п.) заполнять ГИС ЖКХ?
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          Законодатель не делает исключений между организациями, обслуживающими
          многоквартирные дома, в вопросе раскрытия информации, потому в данном
          случае сайт заполняют и управляющие организации, и ТСЖ (ТСН, ЖСК и
          т.п.).
        </p>
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          3. Последствия не заполнения информации.
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          Не заполнение информации влечет привлечение руководителя организации к
          административной ответственности.
        </p>
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          4. Что входит в услугу заполнение информации на web-сайтах ГИС ЖКХ?
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        При заключении с нами договора на оказание данной услуги, Вы получаете следующее:
        </p>
        <ul className="ml-6">
          <li className="list-disc">Мы анализируем за Вас действующее законодательство, регулирующее перечень и сроки размещение информации;</li>
          <li className="list-disc">Мы просим у Вас необходимый перечень информации и размещаем её за Вас;</li>
          <li className="list-disc">Если у Вас отсутствуют какие-либо документы или сведения – мы помогаем Вам их восстановить (получить), или, если это представляется возможным, делаем их для Вас;</li>
          <li className="list-disc">В случае привлечения Вас к административной ответственности за не размещение информации по нашей вине – возмещаем Вам понесённые убытки в полном объёме.</li>
        </ul>
     
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
          5. Сколько стоит услуга заполнение информации на web-сайтах ГИС ЖКХ?
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        Ежемесячная стоимость услуги зависит от количества помещений в многоквартирном(ых) доме(ах), который(е) находятся в управлении (на обслуживании) Заказчик:
        </p>
        <ul className="ml-6">
          <li className="list-disc">До 60 помещений (включительно) - от 1200 руб.;</li>
          <li className="list-disc">До 99 помещений (включительно) - от 1800 руб.;</li>
          <li className="list-disc">До 149 помещений (включительно) - от 2500 руб.;</li>
          <li className="list-disc">До 200 помещений (включительно) - от 3000 руб.;</li>
          <li className="list-disc">От 201 помещения и более - от 3600 руб.;</li>
        </ul>
      </div>
      <div className='mt-6'>
        <h3 className='text-center text-xl font-bold mb-3 lg:text-2xl'>
        С условиями договора на оказании услуг по размещению информации Вы можете ознакомиться ниже по тексту:
        </h3>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          - Договор на оказании услуг по размещению информации в Государственной информационной системе Жилищно-коммунального хозяйства (ГИС ЖКХ) от 01.02.2023 г. (далее по тексту – договор) – <Link className="text-sky-700" href='/files/dogovorgis.pdf'>ознакомиться</Link>.
        </p>
        <p className='indent-5 lg:text-xl lg:leading-8'>
          - Дополнительные соглашения к договору – отсутствуют.
        </p>
        <p className='indent-5 lg:text-xl lg:leading-8'>
        Чтобы заключить договор на размещение информации необходимо заполнить и направить в наш адрес заявления по следующей форме – <Link className="text-sky-700" href='/files/zaevleniygis.docx'>скачать образец заявления</Link>.
        </p>
      </div>
      <hr />
      <p className='indent-5 lg:text-xl lg:leading-8'>
      Если Вас заинтересовала услуга, у Вас имеются вопросы и желание сотрудничать – свяжитесь с нами любым удобным для Вас способом, перечисленным в разделе <Link className="text-sky-700" href='/contacts'>«Контакты»</Link>.
        </p>
    </article>
  )
}

export default Description
