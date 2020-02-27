import React from 'react'

import './ProductCard.scss'
import { getMercadoPagoInfo } from '../../Mercadopago'
import useCheckoutMutation from '../../hooks/useCheckoutMutation'

const time = '00:02:00'

const ProductCard = ({ productPicture, price, marketPrice, totalSold, totalSales, productId }) => {
  const { checkoutPayment } = useCheckoutMutation()

  const getMercadoPagoInfoHandler = async (payerInfo) => {
    const paymentMethod = await getMercadoPagoInfo(payerInfo)

    await checkoutPayment({ productId, paymentMethod })
  }

  const buyProduct = () => {
    const cardInfo = {
      cardNumber: '4509 9535 6623 3704',
      email: 'tjrprecursor@gmail.com',
      securityCode: '123',
      expirationMonth: '11',
      expirationYear: '2025',
      holderName: 'APRO',
      doctType: 'DNI',
      docNumber: '21115997'
    }

    getMercadoPagoInfoHandler(cardInfo)
  }

  return (
    <div className='ProductCard'>
      <img src={productPicture} className='ProductCard--image' alt='product' />
      <div className='ProductCard--details'>
        <div className='ProductCard--prices'>
          <span className='ProductCard--prices__market'>${marketPrice}</span>
          <span className='ProductCard--prices__price'>${price}</span>
        </div>
        <div className='ProductCard--sales'>
          <span>{`${totalSold}/${totalSales}`}</span>
          <span>{time}</span>
        </div>
        <div className='ProductCard--button'>
          <button type='button' onClick={() => buyProduct()}>Compre Ahora</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
