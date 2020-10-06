import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import classnames from 'classnames'

import Icon from '~/src/modules/MainApp/components/Icon'
import ExShape from '~/src/vectors/x.svg'

import classes from './styles.module.scss'

const Modal = ({ className, children, title, isOpen, onRequestClose }) => {
  if (!isOpen) return null

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root')}
      className={classnames(classes.modal, className)}
      overlayClassName={classes.overlay}
      portalClassName={classes.container}
    >
      <div className={classes.header}>
        {title && <div className={classes.title}>{title}</div>}
        <div className={classes.close}>
          <Icon icon={ExShape} onClick={onRequestClose} />
        </div>
      </div>
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default Modal
