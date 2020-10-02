import React from 'react'
import Navbar from '~/src/modules/MainApp/components/Navbar'

export default (component) => (
  <>
    <Navbar />
    {component}
  </>
)
