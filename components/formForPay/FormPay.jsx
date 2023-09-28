'use client'

import { useState } from 'react'
import SelectApp from './../select/SelectApp'
import { handleFormDataChange } from './../../utils/culculate'
import InputNumber from '../inputNum/InputNumber'

const FormPay = () => {
  const [formData, setFormData] = useState({})
  const [selectedEnterprise, setSelectedEnterprise] = useState(null)
  const [selectedAdress, setSelectedAdress] = useState(null)
  const [, setSelectedFlat] = useState(null)

  const handleSelections = (e) => {
    if (e.target.name === 'NAME') {
      setSelectedEnterprise(e.target.value)
    }
    if (e.target.name === 'FLAT') {
      setSelectedAdress(e.target.value)
    }
    if (e.target.name === 'FLAT1') {
      setSelectedFlat(e.target.value)
    }
  }

  const handleChange = (e) => {
    e.persist()
    setFormData((prevState) => handleFormDataChange(e, prevState))
    handleSelections(e)
  }

  return (
    <form
      className='bg-white flex flex-col gap-8 p-10 rounded-lg shadow-2xl w-full'
      action='https://pay.kk.bank/services/83584'
      method='get'
      target='_blank'
      rel='noopener'
    >
    <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>Форма оплаты</h3>

      {/* Поле 1: Наименование управляющей организации и ИНН */}
      <SelectApp
        handleChange={handleChange}
        selectedEnterprise={selectedEnterprise}
        selectedAdress={selectedAdress}
      />

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
          <InputNumber
            onChange={handleChange}
            name='SUMMA1'
            id='floating_service'
            text='Содержание и текущий ремонт общего имущества МКД:'
          />
        </div>
      </div>

      {/*  КРСОИ по ХВС  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <InputNumber
            onChange={handleChange}
            name='SUMMA2'
            id='floating_service2'
            text='КРСОИ по ХВС:'
          />
        </div>

        {/*  Поле 10: КРСОИ по ГВС  */}

        <div className='relative z-0 w-full mb-6 group'>
          <InputNumber
            onChange={handleChange}
            name='SUMMA3'
            id='floating_service3'
            text='КРСОИ по ГВС:'
          />
        </div>
      </div>

      {/* КРСОИ по Водоотведению  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        {/*  КРСОИ по Водоотведению  */}
        <div className='relative z-0 w-full mb-6 group'>
          <InputNumber
            onChange={handleChange}
            name='SUMMA4'
            id='floating_service4'
            text='КРСОИ по Водоотведению:'
          />
        </div>
        {/*  КРСОИ по Электроэнергии  */}
        <div className='relative z-0 w-full mb-6 group'>
          <InputNumber
            onChange={handleChange}
            name='SUMMA5'
            id='floating_service5'
            text='КРСОИ по Электроэнергии:'
          />
        </div>
      </div>

      {/*  Капитальный ремонт  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <InputNumber
            onChange={handleChange}
            name='SUMMA6'
            id='floating_service6'
            text='Капитальный ремонт:'
          />
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
      </div>

      {/* Адрес плательщика  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
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
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
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
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='email'
            name='MAIL'
            id='floating_email'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_email'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Email плательщика:
          </label>
        </div>
      </div>

      {/* Сумма платежа  */}
      <div className=''>
        <div id=''>Сумма платежа {formData?.totalService || 0} руб.</div>
      </div>

      {/*  Комиссия агента  */}
      <div className='relative z-0 w-full mb-6 group'>
      <input
        onChange={(e) => onChange(e)}
        type='number'
        name='SUMMA7'
        id='SUMMA7'
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        placeholder=' '
        min='0'
        required
        step='0.01'
        value={formData?.totalServicePercent || 0}
      />
      <label
        htmlFor='SUMMA7'
        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
         Комиссия агента {formData?.totalServicePercent || 0} руб.
      </label>

        </div>
      {/* <div className=''>
        <div id='SUMMA7'>
          Комиссия агента {formData?.totalServicePercent || 0} руб.
        </div>
      </div> */}

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
