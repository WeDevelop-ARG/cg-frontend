import React from 'react'

import PurchaseList from '../PurchasedList'
import classes from './styles.module.scss'

const PurchasesDisplay = ({ groups }) => {
  return (
    <div className={classes.displayContainer}>
      <div className={classes.statusHeaders}>
        <ul>
          <li><button>Abiertas</button></li>
          <li><button>Concretadas</button></li>
          <li><button>Canceladas</button></li>
        </ul>
      </div>
      <div className={classes.listContainer}>
        <PurchaseList groups={groups} />
      </div>
    </div>
  )
}

export default PurchasesDisplay
