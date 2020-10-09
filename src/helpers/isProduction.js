const isProduction = ({ NODE_ENV }) => {
  if (!NODE_ENV) {
    throw new Error('IsProduction helper missing parameter')   
  }

  const check = () => {
    return NODE_ENV === 'production'
  }

  return check
}

module.exports = isProduction