import React, { useState } from 'react'

import ProductForm from './ProductForm'
import GroupForm from './GroupForm'
import EndPublish from './EndPublish'
import './PublishProduct.scss'

const PublishProduct = () => {
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState({})

  switch (step) {
    case 1:
      return (
        <ProductForm
          nextStep={() => setStep(step + 1)}
          product={(product) => setProduct(product)}
        />
      )
    case 2:
      return (
        <GroupForm
          nextStep={() => setStep(step + 1)}
          prevStep={() => setStep(step - 1)}
          product={product}
        />
      )
    case 3:
      return (
        <EndPublish reset={() => setStep(1)} />
      )
  }
}

export default PublishProduct
