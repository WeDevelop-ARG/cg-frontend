import React, { useState } from 'react'
import classes from './styles.module.scss'
import CurrentStep from '../CurrentStep'
import { Form, Formik } from 'formik'
import {
  normal as Input, multiLine as InputMultiLine, price as InputPrice
} from '../../../components/Input'
import * as Yup from 'yup'
import calculatePercentage from '../../../utils/calculatePercentage'
import useMediaQuery from '../../../hooks/useMediaQuery'
import ConfirmModal from '../../../components/ConfirmModal'
import { useHistory } from 'react-router-dom'
import UploadImageDesktop from './UploadImageDesktop'
import UploadImageMobile from './UploadImageMobile'

const BREAK_POINT = '(max-device-width: 576px)'

const getImageDetail = (file) => ({
  preview: URL.createObjectURL(file),
  raw: file
})

const ProductForm = ({ nextStep, product, currentStep = 0, currentProduct = {} }) => {
  const [photos, setPhotos] = useState(
    (currentProduct.productPhotosUrls && currentProduct.productPhotosUrls.map(getImageDetail)) || []
  )
  const [isShowModal, setIsShowModal] = useState(false)
  const isMobile = useMediaQuery(BREAK_POINT)
  const history = useHistory()

  const productInfoSchema = Yup.object().shape({
    title: Yup.string()
      .required('Se requiere un título'),
    description: Yup.string()
      .required('Se requiere una descripción'),
    marketPrice: Yup.number().required('Se requiere un precio minorista')
      .typeError('Debe ser un número')
      .positive('Debe ser mayor que 0'),
    price: Yup.number().required('Se require un precio mayorista')
      .typeError('Debe ser un número')
      .positive('Debe ser mayor que 0')
  })

  const handleUploadFile = (e) => {
    if (e.target.files.length) {
      const photosToAdd = [...photos]

      const PHOTO_LIMIT = 5 - photosToAdd.length

      for (let i = 0; i < e.target.files.length; i += 1) {
        if (i === PHOTO_LIMIT) break

        const file = e.target.files[i]
        photosToAdd.push(getImageDetail(file))
      }

      setPhotos(photosToAdd)
    }
  }

  const removePhotoByIndex = (index) => {
    const photosToChange = [...photos]
    photosToChange.splice(index, 1)

    setPhotos(photosToChange)
  }

  const goToMain = () => {
    return history.push('/')
  }

  const handleShowModal = ({ title, description, marketPrice, price }) => {
    if (title || description || marketPrice || price || photos.length) {
      return setIsShowModal(true)
    }

    return goToMain()
  }

  return (
    <>
      {
        isShowModal && (
          <ConfirmModal
            confirmMessage='Continuar con la carga'
            rejectMessage='Salir de todas formas'
            title='Salir del proceso de carga'
            description='Tené en cuenta que si salís del proceso de carga, perderás la información del producto que añadiste.'
            onClose={() => setIsShowModal(false)}
            onConfirm={() => setIsShowModal(false)}
            onReject={goToMain}
          />
        )
      }
      <Formik
        initialValues={{
          title: currentProduct.name || '',
          description: currentProduct.description || '',
          marketPrice: currentProduct.marketPrice || 0,
          price: currentProduct.price || 0
        }}
        validationSchema={productInfoSchema}
        onSubmit={async ({ title, description, marketPrice, price }) => {
          if (!photos.length) return null

          product({
            productPhotosUrls: photos.map(({ raw }) => raw),
            name: title,
            description,
            price,
            marketPrice,
            discount: calculatePercentage(marketPrice, price)
          })

          nextStep()
        }}
      >
        {
          ({ values, handleSubmit }) => (
            <>
              <div className={classes.container}>
                <CurrentStep currentStep={currentStep} onBackButton={() => handleShowModal(values)} />
                <div className={classes.forms}>
                  <Form className={classes.productInfo}>
                    <label className={classes.label}>Título</label>
                    <Input
                      name='title'
                      placeholder='Dale un título a tu producto'
                    />
                    <label className={classes.label}>Descripción</label>
                    <InputMultiLine
                      name='description'
                      placeholder='Dale una descripción a tu producto'
                    />
                    <div className={classes.prices}>
                      <div className={classes.price}>
                        <label className={classes.label}>Precio minorista</label>
                        <div className={classes.separatedTop}>
                          <InputPrice
                            name='marketPrice'
                          />
                        </div>
                      </div>
                      <div>
                        <label className={classes.label}>Precio mayorista</label>
                        <div className={classes.separatedTop}>
                          <InputPrice
                            name='price'
                          />
                        </div>
                      </div>
                    </div>
                    <label className={classes.label}>Descuento ofrecido</label>
                    <div className={classes.discountArea}>
                      <span className={classes.discountText}>El descuento que ofrecés es de un</span>
                      <span className={classes.discountPercentage}>
                        {calculatePercentage(values.marketPrice, values.price)}
                          %
                      </span>
                    </div>
                  </Form>
                  {
                    !isMobile ? (
                      <UploadImageDesktop
                        handleUploadFile={handleUploadFile}
                        photos={photos}
                        removePhotoByIndex={removePhotoByIndex}
                      />
                    ) : (
                      <UploadImageMobile
                        handleUploadFile={handleUploadFile}
                        photos={photos}
                        removePhotoByIndex={removePhotoByIndex}
                      />
                    )
                  }
                </div>
                <span className={classes.continueDesktop} onClick={handleSubmit}>Continuar &rsaquo;</span>
              </div>
              <button type='button' className={classes.continueMobile} onClick={handleSubmit}>Continuar &rsaquo;</button>
            </>
          )
        }
      </Formik>
    </>
  )
}

export default ProductForm
