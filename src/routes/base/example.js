
const example = ({ catchAsync, axios, AppError }) => {
  if (
    !catchAsync ||
    !axios ||
    !AppError
  ) {
    throw new Error('Fetch post route missing parameter')
  }

  return catchAsync(async ({ req, res, body }) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return data
  })
}

module.exports = example
