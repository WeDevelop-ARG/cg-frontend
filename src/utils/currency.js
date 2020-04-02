export function USD (amount = 0) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ARS' }).format(amount)
}

export function ARS (amount = 0) {
  const currencyFormatter = new Intl.NumberFormat('es-ES')
  return `$${currencyFormatter.format(amount)}`
}

const bySymbol = {
  $: (amount) => USD(amount)
}

export default { USD, ARS, ...bySymbol }
