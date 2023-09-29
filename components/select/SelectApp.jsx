import { useEffect, useState, useMemo } from 'react'
import { replaceEscapedQuotesAndWrap } from './../../utils/normalizeData'

const SelectApp = ({ handleChange, selectedEnterprise, selectedAdress }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.statusText}`)
        }
        const fetchedData = await response.json()
        setData(fetchedData)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const enterprises = useMemo(
    () =>
      data.map((item) => (
        <option
          key={item.id}
          value={replaceEscapedQuotesAndWrap(item.enterprise)}
        >
          {item.enterprise}
        </option>
      )),
    [data]
  )

  const filteredDataItem = useMemo(
    () => data.find((item) => `${item.enterprise}` === selectedEnterprise),
    [data, selectedEnterprise]
  )

  const homeAdress = useMemo(() => {
    if (!filteredDataItem) return []
    return filteredDataItem.homes.map((home) => (
      <option key={home.id} value={home.adress}>
        {home.adress}
      </option>
    ))
  }, [filteredDataItem])

  const flats = useMemo(() => {
    if (!filteredDataItem) return []
    return filteredDataItem.homes.flatMap((home) =>
      home.flats.map((flat) => {
        if (home.adress === selectedAdress) {
          return (
            <option key={flat.id} value={flat.flat}>
              {flat.flat}
            </option>
          )
        }
      })
    )
  }, [filteredDataItem, homeAdress, selectedAdress])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='grid md:grid-cols-3 md:gap-6'>
      <div className=''>
        <label
          htmlFor='org1'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Наименование управляющей организации и ИНН:
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='org1'
          name='NAME'
          required
        >
          <option value=''>-- Выберите организацию --</option>
          {enterprises}
        </select>
      </div>
      <div className=''>
        <label
          htmlFor='org2'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Выбирите адрес
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='org2'
          name='ADRESS1'
          required
        >
          <option value=''>-- Выберите адрес --</option>
          {homeAdress}
        </select>
      </div>
      <div className=''>
        <label
          htmlFor='org3'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Выбирите квартиру
        </label>
        <select
          onChange={(e) => handleChange(e)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='org3'
          name='FLAT1'
        >
          <option value=''>-- Выбирите квартиру --</option>
          {flats}
        </select>
      </div>
    </div>
  )
}

export default SelectApp
