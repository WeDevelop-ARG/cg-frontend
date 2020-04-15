import React from 'react'

import Arrow from './Arrow'

const Right = ({ isBlack = false, ...props }) => (
  <Arrow {...props} color={isBlack ? 'black' : 'yellow'} direction='right' />
)

export default Right
