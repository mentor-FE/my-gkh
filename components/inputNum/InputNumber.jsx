const InputNumber = ({onChange, name, id, text }) => {
  return (
    <>
      <input
        onChange={(e) => onChange(e)}
        type='number'
        name={name}
        id={id}
        className='placeholder:pl-[300px] block py-2.5 px-0 w-full text-[10px] lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        placeholder='00,00'
        step='0.01'
        min='0'
        onWheel={(e) => e.target.blur()}
      />
      <label
        htmlFor={id}
        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        { text }
      </label>
    </>
  )
}

export default InputNumber