'use client'
import { useState } from 'react'
import SelectApp from './../select/SelectApp'
import { handleFormDataChange } from './../../utils/culculate'
import SummNumber from '../SummNumber/SummNumber'
import CheckboxField from '../checkboxField/checkboxField'
import InputReadOnly from '../inputReadOnly/inputReadOnly'
import InputText from '../inputText/inputText'

const FormPay = () => {
  const [formData, setFormData] = useState({})
  const [selectedEnterprise, setSelectedEnterprise] = useState(null)
  const [selectedAdress, setSelectedAdress] = useState(null)
  const [selectedFlat, setSelectedFlat] = useState(null)
  const [isActiveAgreeOffer, setIsActiveAgreeOffer] = useState(null)
  const [isActiveAgreePersonal, setIsActiveAgreePersonal] = useState(null)

  const handleSelections = (e) => {
    if (e.target.name === 'NAME') {
      setSelectedEnterprise(e.target.value)
    }
    if (e.target.name === 'ADRESS1') {
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



  const isSend = isActiveAgreeOffer && isActiveAgreePersonal
  const summ = (Number(formData?.totalService) || 0) +
  (Number(formData?.totalServicePercent) || 0)

  return (
    <form
      className='bg-white flex flex-col gap-8 p-10 rounded-lg shadow-2xl w-full'
      action='https://pay.kk.bank/services/83584'
      method='get'
      target='_blank'
      rel='noopener'
    >
      <InputReadOnly value={`${selectedAdress} ${selectedFlat}`} name='FLAT' />

      <h3 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
        Форма оплаты
      </h3>

      {/* Поле 1: Наименование управляющей организации и ИНН */}
      <SelectApp
        handleChange={handleChange}
        selectedEnterprise={selectedEnterprise}
        selectedAdress={selectedAdress}
      />

      {/*  Поле 4: Лицевой счет и одержание и текущий ремонт общего имущества МКД  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        {/*  Поле 4: Лицевой счет */}
        <InputText
          name='ACCOUNTNUMBER'
          id='floating_account'
          pattern='^(.*)(?i)persAcc=([^\|]*)(.*)$'
          onChange={handleChange}
        >
          Лицевой счёт:
        </InputText>

        {/* Поле 8: Содержание и текущий ремонт общего имущества МКД */}
        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA1'
            id='floating_service'
            text='Содержание и текущий ремонт общего имущества МКД:'
            value={formData['SUMMA1']?.replace(/,/g, '.') || '00.00'}
          />
        </div>
      </div>

      {/*  КРСОИ по ХВС  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA2'
            id='floating_service2'
            text='КРСОИ по ХВС:'
            value={formData['SUMMA2']?.replace(/,/g, '.') || '00.00'}
          />
        </div>

        {/*  Поле 10: КРСОИ по ГВС  */}

        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA3'
            id='floating_service3'
            text='КРСОИ по ГВС:'
            value={formData['SUMMA3']?.replace(/,/g, '.') || '00.00'}
          />
        </div>
      </div>

      {/* КРСОИ по Водоотведению  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        {/*  КРСОИ по Водоотведению  */}
        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA4'
            id='floating_service4'
            text='КРСОИ по Водоотведению:'
            value={formData['SUMMA4']?.replace(/,/g, '.') || '00.00'}
          />
        </div>
        {/*  КРСОИ по Электроэнергии  */}
        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA5'
            id='floating_service5'
            text='КРСОИ по Электроэнергии:'
            value={formData['SUMMA5']?.replace(/,/g, '.') || '00.00'}
          />
        </div>
      </div>

      {/*  Капитальный ремонт  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <SummNumber
            onChange={handleChange}
            name='SUMMA6'
            id='floating_service6'
            text='Капитальный ремонт:'
            value={formData['SUMMA6']?.replace(/,/g, '.') || '00.00'}
          />
        </div>
        {/* Период оплаты */}
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='PERIOD'
            id='floating_PERIOD'
            className='placeholder:pl-24 placeholder:italic  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Формат: 012023'
            required
            pattern='^(.*)(?i)paymPeriod=(\d{2})(\d{4})(.*)$'
          />
          <label
            htmlFor='floating_PERIOD'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Период оплаты:
          </label>
        </div>
      </div>

      {/* Адрес плательщика  */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <InputText
          name='FIO'
          id='floating_fio_name'
          pattern='^(.*)(?i)lastName=([^\|]*)(.*)firstName=([^\|]*)(.'
          onChange={handleChange}
        >
          Фамилия Имя Отчество:
        </InputText>

        {/* Поле 6: Адрес плательщика  */}
        <InputText
          name='ADDRESS'
          id='floating_address'
          pattern='^(.*)(?i)payerAddress=([^\|]*)(.*)$'
          onChange={handleChange}
        >
          Адрес плательщика:
        </InputText>
        {/* Поле 7: Телефон плательщика -*/}
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            onChange={(e) => handleChange(e)}
            type='tel'
            name='PHONE'
            id='floating_phone'
            className='placeholder:pl-32 placeholder:italic block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='+7XXXXXXXXXX'
            required
            pattern="\+7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
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
      <div id=''>Сумма платежа {formData?.totalService || 0} руб.</div>

      {/*  Комиссия агента  */}
      <InputReadOnly value={formData?.totalServicePercent || 0} name='SUMMA7' onChange={handleChange}/>
      <div id='SUMMA7a'>
        Комиссия агента {formData?.totalServicePercent || 0} руб.
      </div>

      {/*  Итого  */}
      <InputReadOnly value={summ} name='amount' onChange={handleChange}/>

      <div id='grand_total'>
        Итого{' '}
        {(Number(formData?.totalService) || 0) +
          (Number(formData?.totalServicePercent) || 0)}{' '}
        руб.
      </div>

      {/* Согласие с договором оферты  */}
      <fieldset className=''>
        <CheckboxField name='agree_offer' setAgreeOffer={setIsActiveAgreeOffer}>
          Я согласен с{' '}
          <a
            href='#'
            className='text-blue-600 hover:underline dark:text-blue-500'
          >
            договором оферты
          </a>
          .
        </CheckboxField>

        <CheckboxField
          name='agree_personal_data'
          setAgreeOffer={setIsActiveAgreePersonal}
        >
          Я согласен с обработкой моих персональных данных.
        </CheckboxField>
      </fieldset>

      {/* Кнопка для оплаты  */}
      <button
        disabled={!isSend}
        type='submit'
        className={`mx-auto w-48 text-xl text-white ${
          isSend ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-100'
        }  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      >
        Оплатить
      </button>
    </form>
  )
}

export default FormPay
