import React, { useState, useRef, useEffect } from 'react'

import classes from './styles.module.scss'
import more from '~/src/vectors/more-vertical.svg'
import useDeleteGroupMutation from '../../../hooks/useDeleteGroupMutation'
import usePublishedGroupsQuery from '../../../hooks/usePublishedGroupsQuery'

const ItemDropdown = ({ groupId }) => {
  const { deleteGroup } = useDeleteGroupMutation()
  const { refetch } = usePublishedGroupsQuery()
  const [isToggle, setIsToggle] = useState(false)

  const dropdownButtonRef = useRef(null)

  const verifyClickProduct = (e) => {
    if (dropdownButtonRef) {
      if (!dropdownButtonRef.current) {
        setIsToggle(false)
      } else if (!dropdownButtonRef.current.contains(e.target)) {
        setIsToggle(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', verifyClickProduct, false)

    return () => {
      document.removeEventListener('click', verifyClickProduct, false)
    }
  }, [])

  const deleteGroupHandler = async () => {
    await deleteGroup(groupId)
    await refetch()
  }

  return (
    <div className={classes.moreButton}>
      <button onClick={() => setIsToggle(!isToggle)} ref={dropdownButtonRef}>
        <img src={more} alt=':' />
        {
          isToggle && (
            <div className={classes.dropdown}>
              <span onClick={deleteGroupHandler}>Eliminar</span>
            </div>
          )
        }
      </button>
    </div>
  )
}

export default ItemDropdown
