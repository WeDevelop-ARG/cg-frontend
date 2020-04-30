import React from 'react'
import Navbar from '../components/Navbar'

export default (component) => (
  <>
    <Navbar />
    {component}
  </>
)
