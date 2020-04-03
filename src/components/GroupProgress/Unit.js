import React from 'react'
import MaleSolid from '../../vectors/male-solid.svg'
import MaleOutline from '../../vectors/male-outline.svg'

const Unit = ({ isFull = false }) => {
  const getIcon = () => {
    if (!isFull) return MaleOutline

    return MaleSolid
  }

  return <img src={getIcon()} alt='badget' />
}

export default Unit
