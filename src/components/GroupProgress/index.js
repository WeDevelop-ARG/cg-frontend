import React from 'react'

import Unit from './Unit'

import './styles.scss'

const GroupProgress = ({ minParticipants = 0, currentParticipants = 0, type }) => {
  const isGroup = type === 'GROUP'
  const percent = minParticipants && Math.round((currentParticipants / minParticipants) * 100)
  const getUnitQuantity = () => {
    if (isGroup) {
      if (percent < 10) return 0
      if (percent >= 100) return 10

      return Math.floor(percent / 10)
    } else {
      return currentParticipants
    }
  }

  const maxUnits = isGroup ? 10 : 2
  const fullUnits = new Array(getUnitQuantity()).fill({ isFull: true })
  const blankUnits = new Array(maxUnits - fullUnits.length).fill({ isFull: false })

  const units = [...fullUnits, ...blankUnits]

  return (
    <div className='group-progress'>
      <>
        <div className='group-progress__units'>
          {
            units.map(({ isFull }, index) => <Unit key={`unit-${index}`} isFull={isFull} />)
          }
        </div>
        <div className='group-progress__percent-detail'>
          <span className='group-progress__percent-detail--total'>{percent}%</span>
          <span className='group-progress__percent-detail--minmax'>{`${currentParticipants}/${minParticipants} agrupados`}</span>
        </div>
      </>
    </div>
  )
}

export default GroupProgress
