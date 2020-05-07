import React from 'react'
import classes from './styles.module.scss'
import Icon from '../Icon'
import ExShape from '../../vectors/x.svg'
import Button from '../Button/Default'

const ConfirmModal = ({
  title, description, confirmMessage, rejectMessage, onConfirm, onReject, onClose
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <span className={classes.title}>{title}</span>
        <div className={classes.header}>
          <Icon icon={ExShape} onClick={onClose} />
        </div>
        <div className={classes.descriptionContainer}>
          <span className={classes.description}>{description}</span>
        </div>
        <div className={classes.buttons}>
          <div className={classes.reject}>
            <span onClick={onReject}>{rejectMessage}</span>
          </div>
          <Button
            onClick={onConfirm}
          >
            {confirmMessage}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
