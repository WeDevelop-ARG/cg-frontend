import React from 'react'

import './Landing.scss'

// components
import ProductCard from '../../components/ProductCard'

// TODO this must come from a service
import productData from './productData'

const Landing = () => {
  return (
    <div className='Landing'>
      <h1>Product List</h1>
      <div className='Landing__main-container'>
        {
          productData.map((product) => (
            <ProductCard
              key={product.id}
              productPicture={product.productPicture}
              marketPrice={product.marketPrice}
              price={product.price}
              totalSales={product.totalSales}
              totalSold={product.totalSold}
            />
          ))
        }
      </div>
      <div className='Landing__wantsales'>
        <button type='button' name='want-sales'>
          Quiero vender
        </button>
      </div>
    </div>
  )
}

export default Landing
