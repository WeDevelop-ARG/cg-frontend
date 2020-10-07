import React from 'react'

import PurchaseListItem from '../PurchasedItem'
import classes from './styles.module.scss'

const PurchasedList = ({ groups }) => {
  return (
    <ul>
      <div className={classes.listHeaders}>
        <p>Producto</p>
        <p>Precio</p>
        <p>Grupo</p>
        <p>Caduca en</p>
      </div>
      {groups.map(group => (
        <li key={group.id}>
          <PurchaseListItem group={group} />
        </li>
      ))}
    </ul>
  )
}

export default PurchasedList
