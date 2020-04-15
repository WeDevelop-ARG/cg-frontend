import React from 'react'

import Arrow from './Arrow'

const Left = ({ isBlack = false, ...props }) => (
  <Arrow {...props} color={isBlack ? 'black' : 'yellow'} direction='left' />
)

export default Left
