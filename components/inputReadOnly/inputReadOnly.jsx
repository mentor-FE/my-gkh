const InputReadOnly = ({name, ...rest}) => {
  return (
    <input
    name={name}
    {...rest}
    className='hidden'
    readOnly
  />
  )
}

export default InputReadOnly