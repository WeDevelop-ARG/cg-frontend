import React from 'react'

import Arrow from './Arrow'

const Left = (props) => (
  <Arrow {...props} direction='left' />
)

Left.propTypes = {
  ...Arrow.propTypes
}

export default Left
