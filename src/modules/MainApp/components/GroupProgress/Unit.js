import React, { useMemo } from 'react'
import MaleSolid from '~/src/vectors/male-solid.svg'
import MaleOutline from '~/src/vectors/male-outline.svg'

import classes from './styles.module.scss'

const Unit = ({ isFull = false }) => {
  const icon = useMemo(() => (isFull) ? MaleSolid : MaleOutline, [isFull])

  return <img className={classes.img} src={icon} alt='badget' />
}

export default Unit
