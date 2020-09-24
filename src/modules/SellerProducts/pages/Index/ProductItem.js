import React, { useState, useRef, useEffect, useContext } from 'react'
import currency from '~/src/utils/currency'

import './MyProducts.scss'
import more from '~/src/vectors/more-vertical.svg'
import myProductContext from './myProductContext'
import useDeleteGroupMutation from '../../hooks/useDeleteGroupMutation'

const ProductItem = ({ group }) => {
  const { deleteGroup } = useDeleteGroupMutation()
  const { refetchProducts } = useContext(myProductContext)
  const [isToggle, setIsToggle] = useState(false)
  const product = group.product
  const expireDate = new Date(group.expiresAt).toLocaleString('es-AR')

  const dropdownButtonRef = useRef(null)

  const verifyClickProduct = (e) => {
    if (dropdownButtonRef) {
      if (!dropdownButtonRef.current) {
        setIsToggle(false)
      } else if (!dropdownButtonRef.current.contains(e.target)) {
        setIsToggle(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', verifyClickProduct, false)

    return () => {
      document.removeEventListener('click', verifyClickProduct, false)
    }
  }, [])

  const deleteGroupHandler = async () => {
    await deleteGroup(group.id)
    return refetchProducts()
  }

  return (
    <div className='MyProducts__List__item'>
      <div className='MyProducts__List__item--description'>
        <div
          className='MyProducts__List__item--image'
          style={{
            backgroundImage: `url(${product.photos[0].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        />
        <div className='MyProducts__List__item--info'>
          <span className='MyProducts__List__item--info--id'>#{product.id.slice(0, 8)}</span>
          <p>{product.name}</p>
          <span>45 visitas | 2 ventas</span>
        </div>
      </div>

      <div className='MyProducts__List__item--price'>
        <span>{currency.ARS(product.marketPrice)}</span>
        <p>{currency.ARS(product.price)}</p>
      </div>

      <div className='MyProducts__List__item--discount'>
        <p>{group.discount}%</p>
      </div>

      <div className='MyProducts__List__item--participants'>
        <p>{group.minParticipants} personas</p>
      </div>

      <div className='MyProducts__List__item--expireDate'>
        <p>{expireDate.slice(0, -3)} hs</p>
      </div>

      <div className='MyProducts__List__item--more'>
        <button onClick={() => setIsToggle(!isToggle)} ref={dropdownButtonRef}>
          <img src={more} alt=':' />
          {
            isToggle && (
              <div className='MyProducts__List__item--more__dropdown'>
                <span onClick={deleteGroupHandler}>Eliminar</span>
              </div>
            )
          }
        </button>
      </div>
    </div>
  )
}

export default ProductItem
