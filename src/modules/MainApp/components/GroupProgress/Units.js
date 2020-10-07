import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Unit from './Unit'

import classes from './styles.module.scss'

const Units = ({ maxUnits, filledUnits }) => {
  const fullUnits = useMemo(() => new Array(filledUnits).fill({ isFull: true }), [filledUnits])
  const blankUnits = useMemo(() => new Array(maxUnits - fullUnits.length).fill({ isFull: false }), [maxUnits, fullUnits])
  const units = useMemo(() => [...fullUnits, ...blankUnits], [fullUnits, blankUnits])

  return (
    <div className={classes.groupProgressUnits}>
      {units.map(({ isFull }, index) => <Unit key={`unit-${index}`} isFull={isFull} />)}
    </div>
  )
}

Units.propTypes = {
  maxUnits: PropTypes.number,
  filledUnits: PropTypes.number
}

export default Units
