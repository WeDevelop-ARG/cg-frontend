import React, { useState, useEffect } from 'react'
import Card from '../../Card'
import ShoppingCardIcon from '../../../../vectors/shopping-card.svg'
import MoneyIcon from '../../../../vectors/money.svg'
import GroupCardIcon from '../../../../vectors/group.svg'
import classes from './styles.module.scss'
import Slider from './Slider'

const cards = [
  <Card
    key={`card-${1}`}
    title='Rapidez'
    icon={ShoppingCardIcon}
  >
    Vendé tu stock de productos rápidamente, sin tener que invertir tiempo en captar clientes individuales
  </Card>,
  <Card
    key={`card-${2}`}
    title='Libertad de venta'
    icon={MoneyIcon}
  >
    El precio y el margen de ganancia dependen de vos, como así también las unidades a vender
  </Card>,
  <Card
    key={`card-${3}`}
    title='Ganan todos'
    icon={GroupCardIcon}
  >
    A partir de la venta mayorista aumentás visibilidad, tus productos se difunden en redes sociales y llegás a más gente
  </Card>
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    if (currentIndex >= 2) {
      return setCurrentIndex(0)
    }

    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const time = setTimeout(nextCard, 4000)

    return () => clearTimeout(time)
  }, [currentIndex])

  return (
    <div className={classes.carousel}>
      {cards[currentIndex]}
      <Slider currentIndex={currentIndex} maxLength={3} />
    </div>
  )
}

export default Carousel
