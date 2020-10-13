import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import ArrowLeftBlack from '~/src/vectors/arrow-left.svg'
import ArrowLeftYellow from '~/src/vectors/arrow-left-y.svg'

import ArrowRightBlack from '~/src/vectors/arrow-right.svg'
import ArrowRightYellow from '~/src/vectors/arrow-right-y.svg'

import classes from './styles.module.scss'

const getDirection = (color, direction) => {
  if (color === 'yellow') {
    if (direction === 'left') return ArrowLeftBlack

    return ArrowRightBlack
  }

  if (direction === 'left') return ArrowLeftYellow

  return ArrowRightYellow
}

const Arrow = ({ color, direction, ...props }) => {
  const styles = useMemo(() => {
    if (color === 'yellow') return { className: classes.yellowArrow, vector: getDirection(color, direction) }

    return {
      className: classes.blackArrow,
      vector: getDirection(color, direction)
    }
  }, [color, direction])

  return (
    <button type='button' {...props} className={styles.className}>
      <img src={styles.vector} alt='arrow' />
    </button>
  )
}

Arrow.propTypes = {
  color: PropTypes.oneOf(['black', 'yellow']),
  direction: PropTypes.oneOf(['left', 'right'])
}

export default Arrow
