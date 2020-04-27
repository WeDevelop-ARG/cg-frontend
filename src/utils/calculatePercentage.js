export default (oldPrice, price) => {
  const diference = oldPrice - price
  
  return Math.round((diference / oldPrice) * 100)
}
