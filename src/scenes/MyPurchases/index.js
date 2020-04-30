import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import useSubscribedGroupsQuery from '../../hooks/useSubscribedGroupsQuery'
import Loading from '../../components/Loading'

import EmptyProductList from './NoPurchases'
import PurchasesDisplay from './PurchasesDisplay'
import classes from './styles.module.scss'

const MyPurchases = () => {
  const { loading, currentUser } = useSubscribedGroupsQuery()

  if (loading) return <Loading />

  if (!currentUser) return <Redirect to='/' />
  const { subscribedGroups } = currentUser

  return (
    <div className={classes.purchases}>
      <Link to='/' className={classes.goHome}>
        &#60;  Volver a la pagina principal
      </Link>
      <h1>Mis compras</h1>
      <div className={classes.container}>
        {
          subscribedGroups.length ? (
            <PurchasesDisplay groups={subscribedGroups} />
          ) : <EmptyProductList />
        }
      </div>
    </div>
  )
}

export default MyPurchases
