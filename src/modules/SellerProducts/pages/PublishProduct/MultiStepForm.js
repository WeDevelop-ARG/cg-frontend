import React, { useState, useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { schema, initialValues } from './schema'
import StepWizard from 'react-step-wizard'
import useCreateGroupMutation from '../../hooks/useCreateGroupMutation'
import getCreateGroupMutationInput from './parseInput'
import { logFormSubmit } from '~/src/utils/analytics'

import ProductForm from '../../components/ProductForm'
import GroupForm from '../../components/GroupForm'
import './PublishProduct.scss'
import classes from './styles.module.scss'
import CurrentStep from '../../components/CurrentStep'

const initialStep = 1

const MultiStepForm = ({ openConfirmModal }) => {
  const history = useHistory()
  const { path } = useRouteMatch()
  const [step, setStep] = useState(initialStep)
  const { createGroup } = useCreateGroupMutation()

  const handleSubmit = useCallback(async (data) => {
    const groupInput = await getCreateGroupMutationInput(data)
    const response = await createGroup(groupInput)
    await logFormSubmit('create_product_form')

    const { id: groupId } = response.data.createGroup
    history.push(`${path}/${groupId}`)
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

export default MultiStepForm
