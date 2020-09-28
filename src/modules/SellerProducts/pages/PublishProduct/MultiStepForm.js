import React, { useState, useCallback } from 'react'
import { Formik, Form } from 'formik'
import { schema, initialValues } from './schema'
import StepWizard from 'react-step-wizard'

import ProductForm from '../../components/ProductForm'
import GroupForm from '../../components/GroupForm'
import EndPublish from './EndPublish'
import './PublishProduct.scss'
import classes from './styles.module.scss'
import CurrentStep from '../../components/CurrentStep'

const MultiStepForm = ({ openConfirmModal }) => {
  const initialStep = 2
  const [step, setStep] = useState(initialStep)

  const handleSubmit = useCallback(async (data) => {
    console.log(data)
  }, [])

  return (
    <div className={classes.publishFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema[step - 1]}
        onSubmit={handleSubmit}
        validateOnMount
      >
        <Form className={classes.fullHeight}>
          <StepWizard
            className={classes.fullHeight}
            initialStep={initialStep}
            onStepChange={(stepChanged) => setStep(stepChanged)}
            transitions={{}}
            nav={<CurrentStep currentStep={step} openConfirmModal={openConfirmModal} />}
          >
            <ProductForm />
            <GroupForm />
          </StepWizard>
        </Form>
      </Formik>
    </div>
  )
}

/*
const MultiStepFormOld = () => {
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState({})
  const [group, setGroup] = useState({})

  switch (step) {
    case 1:
      return (
        <ProductFormOld
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
*/

export default MultiStepForm
