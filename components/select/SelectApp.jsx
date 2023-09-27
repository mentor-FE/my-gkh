import { useEffect, useState, useMemo  } from 'react'
import { replaceEscapedQuotesAndWrap } from './../../utils/normalizeData'

const SelectApp = ({ handleChange, selectedEnterprise }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.statusText}`)
        }
        const fetchedData = await response.json()
        setData(fetchedData)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }
    fetchData()
  }, [])

  const filteredDataItem = useMemo(() => 
  data.find((item) => `${item.enterprise}` === selectedEnterprise)
, [data, selectedEnterprise]);

const enterprises = useMemo(() => 
  data.map((item) => (
    <option key={item.id} value={replaceEscapedQuotesAndWrap(item.enterprise)}>
      {item.enterprise}
    </option>
  ))
, [data]);

const homeAdress = useMemo(() => {
  if (!filteredDataItem) return [];
  return filteredDataItem.homes.map((home) => (
    <option key={home.id} value={home.adress}>
      {home.adress}
    </option>
  ))
}, [filteredDataItem]);

const flats = useMemo(() => {
  if (!filteredDataItem) return [];
  return filteredDataItem.homes.flatMap((home) => 
    home.flats.map((flat) => (
      <option key={flat.id} value={flat.flat}>
        {flat.flat}
      </option>
    ))
  )
}, [filteredDataItem]);

  return (
    <div className='grid md:grid-cols-3 md:gap-6'>
      <div className=''>
        <label
          htmlFor='org'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Наименование управляющей организации и ИНН:
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='org'
          name='NAME'
          required
        >
          <option value=''>
            -- Выберите организацию --
          </option>
          {enterprises}
        </select>
      </div>
      <div className=''>
        <label
          htmlFor='org'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Выбирите адрес
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='orgAdress'
          name='NAMEADRESS'
          required
        >
          <option value=''>
            -- Выберите адрес --
          </option>
          {homeAdress}
        </select>
      </div>
      <div className=''>
        <label
          htmlFor='org'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Выбирите адрес
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='orgFlat'
          name='NAMEFLAT'
          required
        >
          <option value=''>
            -- Выберите адрес --
          </option>
          {flats}
        </select>
      </div>
    </div>
  )
}

export default SelectApp
