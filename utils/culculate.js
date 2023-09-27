export const handleFormDataChange = (e, prevState) => {
  const updatedState = {
    ...prevState,
    [e.target.name]: e.target.value,
  }

  const sum = calculateServiceSum(updatedState)
  updatedState['totalService'] = sum
  updatedState['totalServicePercent'] = calculateServicePercent(sum)

  return updatedState
}

const calculateServiceSum = (state) => {
  const fields = ['SUMMA1', 'SUMMA2', 'SUMMA3', 'SUMMA4', 'SUMMA5', 'SUMMA6']
  return fields
    .map((field) => parseFloat(state[field]) || 0)
    .reduce((a, b) => a + b, 0)
}

const calculateServicePercent = (sum) => {
  return (sum * 0.0007).toFixed(2)
}
