import React from 'react'

import './Landing.scss'
import useProductsQuery from '../../hooks/useProductsQuery'

// components
import ProductCard from '../../components/ProductCard'

const Landing = () => {
  const { products } = useProductsQuery()

  return (
    <div className='Landing'>
      <h1>Product List</h1>
      <div className='Landing__main-container'>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              productPicture={product.photoUrl}
              marketPrice={product.marketPrice}
              price={product.price}
              totalSales={20}
              totalSold={1}
              productId={product.id}
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
