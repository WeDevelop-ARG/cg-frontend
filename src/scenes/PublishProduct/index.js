import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ConfirmModal from '../../components/ConfirmModal'

import MultiStepForm from './MultiStepForm'
import './PublishProduct.scss'

const PublishProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()

  const goToMain = () => {
    return history.push('/')
  }

  return (
    <>
      {
        isModalOpen && (
          <ConfirmModal
            confirmMessage='Continuar con la carga'
            rejectMessage='Salir de todas formas'
            title='Salir del proceso de carga'
            description='Tené en cuenta que si salís del proceso de carga, perderás la información del producto que añadiste.'
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => setIsModalOpen(false)}
            onReject={goToMain}
          />
        )
      }
      <div className='Publish'>
        <a onClick={() => setIsModalOpen(true)} className='Publish__go-home'>
          &#60;  Volver a la pagina principal
        </a>
        <h1 className='Publish__title'>Publicar Producto</h1>
        <div className='Publish--container'>
          <MultiStepForm className='Publish__ms-form' />
        </div>
      </div>
    </>
  )
}

export default PublishProduct
