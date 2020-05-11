import React, { useState } from 'react'
import classes from './styles.module.scss'
import classNames from 'classnames'
import CurrentStep from '../CurrentStep'
import { Form, Formik } from 'formik'
import {
  normal as Input, multiLine as InputMultiLine, price as InputPrice
} from '../../../components/Input'
import * as Yup from 'yup'
import calculatePercentage from '../../../utils/calculatePercentage'
import Icon from '../../../components/Icon'
import UploadShape from '../../../vectors/load-images.svg'
import AddShape from '../../../vectors/add.svg'
import useMediaQuery from '../../../hooks/useMediaQuery'
import ConfirmModal from '../../../components/ConfirmModal'
import { useHistory } from 'react-router-dom'

const BREAK_POINT = '(max-device-width: 576px)'

const ProductForm = ({ nextStep, product, currentStep = 0 }) => {
  const [photos, setPhotos] = useState([])
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
      const photosToAdd = []

      for (let i = 0; i < e.target.files.length; i += 1) {
        if (i === 5) break

        const file = e.target.files[i]
        photosToAdd.push({
          preview: URL.createObjectURL(file),
          raw: file
        })
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

  const imagesAreaClass = classNames({
    [classes.imagesArea]: !isMobile || !photos.length,
    [classes.imagesAreaHidden]: isMobile && photos.length
  })

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
      <div className={classes.container}>
        <Formik
          initialValues={{
            title: '',
            description: '',
            marketPrice: 0,
            price: 0
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
                  <div className={imagesAreaClass}>
                    <label className={classes.label}>Imágenes del producto</label>
                    <label htmlFor='upload-button'>
                      {
                        isMobile && !!photos.length ? (
                          photos.map(({ preview }, key) => (
                            <img
                              src={preview}
                              key={`product-photo${key}`}
                              className={classes.photo}
                              onClick={() => removePhotoByIndex(key)}
                            />
                          ))
                        ) : (
                          <div className={classes.dropzone}>
                            <div className={classes.uploadInstructions}>
                              <Icon icon={UploadShape} />
                              <div className={classes.instructionsDetail}>
                                <span className={classes.attach}>Adjuntá imágenes de tu producto</span>
                                <span className={classes.limit}>Subí hasta 5 fotos</span>
                              </div>
                              <input
                                type='file'
                                id='upload-button'
                                style={{ display: 'none' }}
                                onChange={handleUploadFile}
                                accept='image/*'
                                multiple
                              />
                              <Icon icon={AddShape} />
                            </div>
                          </div>
                        )
                      }
                    </label>
                    <div className={classes.photos}>
                      {
                        !isMobile && (
                          photos.map(({ preview }, key) => (
                            <img
                              src={preview}
                              key={`product-photo${key}`}
                              className={classes.photo}
                              onClick={() => removePhotoByIndex(key)}
                            />
                          ))
                        )
                      }
                    </div>
                  </div>
                  <div className={classes.continueMobile} onClick={handleSubmit}>
                    <span>
                      Continuar &rsaquo;
                    </span>
                  </div>
                </div>
                <span className={classes.continueFloating} onClick={handleSubmit}>Continuar &rsaquo;</span>
              </>
            )
          }
        </Formik>
      </div>
    </>
  )
}

export default ProductForm
