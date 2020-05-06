export default (oldPrice = 0, price = 0) => {
  if (oldPrice === 0) return 0
  const diference = oldPrice - price

  const percentage = Math.round((diference / oldPrice) * 100)

  if (Number.isNaN(percentage)) return 0

  if (!Number.isFinite) return 0

  return percentage
}
