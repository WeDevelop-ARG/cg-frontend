import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ConfirmModal from '../../components/ConfirmModal'

import MultiStepForm from './MultiStepForm'
import classes from './styles.module.scss'

const PublishProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()

  const goToMain = () => {
    return history.push('/')
  }

  return (
    <>
      <div className={classes.publishProduct}>
        <a onClick={() => setIsModalOpen(true)} className={classes.homeLink}>
          &#60;  Volver a la pagina principal
        </a>
        <h1 className={classes.title}>Publicar Producto</h1>
        <MultiStepForm openConfirmModal={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <ConfirmModal
          confirmMessage='Continuar con la carga'
          rejectMessage='Salir de todas formas'
          title='Salir del proceso de carga'
          description='Tené en cuenta que si salís del proceso de carga, perderás la información del producto que añadiste.'
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
          onReject={goToMain}
        />
      )}
    </>
  )
}

export default PublishProduct
