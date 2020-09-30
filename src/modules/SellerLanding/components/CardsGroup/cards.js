import React from 'react'
import Card from '../Card'

import ShoppingCardIcon from '~/src/vectors/shopping-card.svg'
import MoneyIcon from '~/src/vectors/money.svg'
import GroupCardIcon from '~/src/vectors/group.svg'

const cards = [
  <Card
    key='rapidez'
    title='Rapidez'
    icon={ShoppingCardIcon}
    message='Vendé tu stock de productos rápidamente, sin tener que invertir tiempo en captar clientes individuales'
  />,
  <Card
    key='libertad'
    title='Libertad de venta'
    icon={MoneyIcon}
    message='El precio y el margen de ganancia dependen de vos, como así también las unidades a vender'
  />,
  <Card
    key='ganan'
    title='Ganan todos'
    icon={GroupCardIcon}
    message='A partir de la venta mayorista aumentás visibilidad, tus productos se difunden en redes sociales y llegás a más gente'
  />
]

export default cards
