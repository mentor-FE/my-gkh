'use client'

import {  useState } from 'react'
import SelectApp from './../select/SelectApp'

const FormPay = () => {
  const [formData, setFormData] = useState({})
  const [selectedEnterprise, setSelectedEnterprise] = useState(null)
  const [selectedAdress, setSelectedAdress] = useState(null)
  const [selectedFlat, setSelectedFlat] = useState(null)
  const handleChange = (e) => {
    e.persist()
    setFormData((prevState) => {
      // Обновляем текущее состояние формы
      const updatedState = {
        ...prevState,
        [e.target.name]: e.target.value,
      }

      // Расчет суммы услуг
      const sum = ['SUMMA1', 'SUMMA2', 'SUMMA3', 'SUMMA4', 'SUMMA5', 'SUMMA6']
        .map((field) => parseFloat(updatedState[field]) || 0)
        .reduce((a, b) => a + b, 0)

      // Добавляем сумму услуг в состояние формы
      updatedState['totalService'] = sum

      // Вычисляем 0,07% от суммы и добавляем в состояние формы
      updatedState['totalServicePercent'] = (sum * 0.0007).toFixed(2)

      return updatedState
    })
    if(e.target.name === 'NAMEADRESS'){
      setSelectedAdress(e.target.name === 'NAMEADRESS' && e.target.value)
    }
    if(e.target.name === 'NAME'){
      setSelectedEnterprise(e.target.name === 'NAME' && e.target.value)
    }
    if(e.target.name === 'NAMEFLAT'){
      setSelectedFlat(e.target.name === 'NAMEFLAT' && e.target.value)
    }
  }

  return (
    <form
      className='bg-white flex flex-col gap-8 p-10 rounded-[25px] shadow-2xl mt-2'
      action='https://pay.kk.bank/services/83584'
      method='get'
      target='_blank'
      rel='noopener'
    >
      <h2 className=''>Форма оплаты</h2>
      {/* Поле 1: Наименование управляющей организации и ИНН */}
      <SelectApp handleChange={handleChange} selectedEnterprise={selectedEnterprise} selectedAdress={selectedAdress}/>

      {/*  Поле 4: Лицевой счет и одержание и текущий ремонт общего имущества МКД  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        {/*  Поле 4: Лицевой счет */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='ACCOUNTNUMBER'
            id='floating_account'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_account'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Лицевой счёт:
          </label>
        </div>
        {/* Поле 8: Содержание и текущий ремонт общего имущества МКД */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA1'
            id='floating_service'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Содержание и текущий ремонт общего имущества МКД:
          </label>
        </div>
      </div>

      {/*  КРСОИ по ХВС  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA2'
            id='floating_service2'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service2'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            КРСОИ по ХВС:
          </label>
        </div>

        {/*  Поле 10: КРСОИ по ГВС  */}

        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA3'
            id='floating_service3'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service3'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            КРСОИ по ГВС:
          </label>
        </div>
      </div>

      {/* КРСОИ по Водоотведению  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        {/*  КРСОИ по Водоотведению  */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA4'
            id='floating_service4'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service4'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            КРСОИ по Водоотведению:
          </label>
        </div>
        {/*  КРСОИ по Электроэнергии  */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA5'
            id='floating_service5'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service5'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            КРСОИ по Электроэнергии:
          </label>
        </div>
      </div>

      {/*  Капитальный ремонт  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='number'
            name='SUMMA6'
            id='floating_service6'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            step='0.01'
            min='0'
            required
          />
          <label
            htmlFor='floating_service6'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Капитальный ремонт:
          </label>
        </div>
      </div>

      {/* Период оплаты */}
      <div className='grid md:grid-cols-3 md:gap-6'>
        <div className=''>
          <label
            htmlFor='payment_period'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Период оплаты:
          </label>
          <select
            onChange={(e) => handleChange(e)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            id='payment_period'
            name='PERIOD'
          >
            <option value='012023'>Январь 2023</option>
            <option value='022023'>Февраль 2023</option>
          </select>
        </div>
        {/*  Поле 3: Номер помещения  */}
        {/* <div className=''>
          <label
            htmlFor='room'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Номер помещения:
          </label>
          <select
            onChange={(e) => handleChange(e)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            id='room'
            name='room'
          >
            <option value='Квартира №38'>Квартира №38</option>
            <option value='Квартира №39'>Квартира №39</option>
            <option value='Квартира №40'>Квартира №40</option>
          </select>
        </div> */}
      </div>

      {/* Адрес плательщика  */}
      <div className='grid md:grid-cols-3 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='FIO'
            id='floating_fio_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_fio_name'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Фамилия Имя Отчество:
          </label>
        </div>
        {/* Поле 6: Адрес плательщика  */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='ADDRESS'
            id='floating_address'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_address'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Адрес плательщика:
          </label>
        </div>
        {/* Поле 7: Телефон плательщика -*/}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='tel'
            name='PHONE'
            id='floating_phone'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_phone'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Телефон плательщика:
          </label>
        </div>
      </div>

      {/* Сумма платежа  */}
      <div className=''>
        <div id=''>Сумма платежа {formData?.totalService || 0} руб.</div>
      </div>

      {/*  Комиссия агента  */}
      <div className=''>
        <div id='agent_fee'>
          Комиссия агента {formData?.totalServicePercent || 0} руб.
        </div>
      </div>

      {/*  Итого  */}
      <div className=''>
        <div id='grand_total'>
          Итого{' '}
          {(Number(formData?.totalService) || 0) +
            (Number(formData?.totalServicePercent) || 0)}{' '}
          руб.
        </div>
        {/* <input type="number" name="DENGI_F" value={(Number(formData?.totalService) || 0) +
            (Number(formData?.totalServicePercent) || 0)} /> */}
      </div>

      {/* Согласие с договором оферты  */}

      <fieldset className=''>
        <div className='flex items-center mb-4'>
          <input
            id='agree_offer'
            type='checkbox'
            name='agree_offer'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='agree_offer'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            {' '}
            Я согласен с{' '}
            <a
              href='#'
              className='text-blue-600 hover:underline dark:text-blue-500'
            >
              договором оферты
            </a>
            .
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='agree_personal_data'
            name='agree_personal_data'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='agree_personal_data'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            {' '}
            Я согласен с обработкой моих персональных данных .
          </label>
        </div>
      </fieldset>

      {/* Кнопка для оплаты  */}
      <button
        type='submit'
        className='mx-auto w-48 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Оплатить
      </button>
    </form>
  )
}

export default FormPay
