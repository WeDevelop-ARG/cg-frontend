import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Units from './Units'

import classes from './styles.module.scss'

const GroupProgress = ({ minParticipants = 0, currentParticipants = 0, type }) => {
  const isGroup = type === 'GROUP'
  const percent = useMemo(() => minParticipants && Math.round((currentParticipants / minParticipants) * 100), [minParticipants, currentParticipants])
  const fulledUnitQuantity = useMemo(() => {
    if (isGroup) {
      if (percent < 10) return 0
      if (percent >= 100) return 10

      return Math.floor(percent / 10)
    } else {
      return currentParticipants
    }
  }, [isGroup, percent, currentParticipants])

  const maxUnits = isGroup ? 10 : 2

  return (
    <div className={classes.groupProgress}>
      <Units maxUnits={maxUnits} filledUnits={fulledUnitQuantity} />
      <div className={classes.groupProgressPercentDetail}>
        <div className={classes.discount}>{percent}%</div>
        <div className={classes.info}>{`${currentParticipants}/${minParticipants} agrupados`}</div>
      </div>
    </div>
  )
}

GroupProgress.propTypes = {
  minParticipants: PropTypes.number,
  currentParticipants: PropTypes.number,
  type: PropTypes.string
}

export default GroupProgress
