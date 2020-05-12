import React, { useState } from 'react'

import ProductForm from './ProductForm'
import GroupForm from './GroupForm'
import EndPublish from './EndPublish'
import './PublishProduct.scss'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState({})
  const [group, setGroup] = useState({})

  switch (step) {
    case 1:
      return (
        <ProductForm
          currentStep={step}
          nextStep={() => setStep(step + 1)}
          currentProduct={product}
          product={(product) => setProduct(product)}
        />
      )
    case 2:
      return (
        <GroupForm
          nextStep={() => setStep(step + 1)}
          prevStep={() => setStep(step - 1)}
          product={product}
          group={(group) => setGroup(group)}
        />
      )
    case 3:
      return (
        <EndPublish
          reset={() => setStep(1)}
          group={group}
        />
      )
  }
}

export default MultiStepForm
