import React from 'react'
import classNames from 'classnames'
import classes from './styles.module.scss'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Icon from '../../../components/Icon'
import LeftShape from '../../../vectors/angle-left.svg'

const BREAK_POINT = '(max-device-width: 576px)'

const CurrentStep = ({ currentStep = 1, onBackButton }) => {
  const isMobile = useMediaQuery(BREAK_POINT)

  const firstCircleClass = classNames({
    [classes.circleSelected]: currentStep === 1,
    [classes.circleUnselected]: currentStep === 2
  })

  const secondCircleClass = classNames({
    [classes.circleSelected]: currentStep === 2,
    [classes.circleUnselected]: currentStep === 1
  })

  const productTextClass = classNames({
    [classes.textSelected]: currentStep === 1,
    [classes.textUnselected]: currentStep === 2
  })

  const groupTextClass = classNames({
    [classes.textSelected]: currentStep === 2,
    [classes.textUnselected]: currentStep === 1
  })

  return (
    <div className={classes.steps}>
      <Icon onClick={onBackButton} className={classes.back} icon={LeftShape} style={{ display: isMobile ? 'block' : 'none' }} />
      <div
        className={classes.firstStep}
        style={{ display: isMobile && currentStep === 2 ? 'none' : 'flex' }}
      >
        <div className={firstCircleClass}>
          <span className={classes.number}>1</span>
        </div>
        <span className={productTextClass}>Información del producto</span>
      </div>
      <div
        className={classes.secondStep}
        style={{ display: isMobile && currentStep === 1 ? 'none' : 'flex' }}
      >
        <div className={secondCircleClass}>
          <span className={classes.number}>2</span>
        </div>
        <span className={groupTextClass}>Información del grupo</span>
      </div>
    </div>
  )
}

export default CurrentStep
