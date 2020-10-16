import React from 'react'

import Arrow from './Arrow'

const Right = (props) => (
  <Arrow {...props} direction='right' />
)

Right.propTypes = {
  ...Arrow.propTypes
}

export default Right
