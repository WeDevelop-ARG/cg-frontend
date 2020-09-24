import React from 'react'
import ProductListItem from './ProductItem'

import classes from './styles.module.scss'

const listHeaders = ['Detalles', 'Precio', '% Descuento', 'Participantes', 'Fecha de expiración', '']

const ProductList = ({ groups }) => {
  return (
    <div className={classes.listContainer}>
      <div className={classes.headers}>
        {listHeaders.map((header, headerKey) => (<p key={headerKey}>{header}</p>))}
      </div>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <ProductListItem group={group} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
