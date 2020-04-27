import calculatePercentage from '../../utils/calculatePercentage'

const calcGroupDiscountPercent = (group) => {
  const {
    marketPrice, price
  } = group.product

  return calculatePercentage(marketPrice, price)
}

export default (groups = []) => {
  return groups.sort((previousGroup, nextGroup) => {
    const previousGroupDiscountPercent = calcGroupDiscountPercent(previousGroup)
    const nextGroupDiscountPercent = calcGroupDiscountPercent(nextGroup)

    return nextGroupDiscountPercent - previousGroupDiscountPercent
  })
}
