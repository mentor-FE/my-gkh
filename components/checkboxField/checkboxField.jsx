import React from 'react'

const CheckboxField = ({name, setAgreeOffer, children}) => {

  const handleChange = (e) => {
    setAgreeOffer(e.target.checked)
  }

  return (
    <div className='flex items-center mb-4'>
      <input
        onChange={handleChange}
        id={name}
        type='checkbox'
        name={name}
        value=''
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor={name}
        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        { children }
      </label>
  </div>
  ) 
}

export default CheckboxField