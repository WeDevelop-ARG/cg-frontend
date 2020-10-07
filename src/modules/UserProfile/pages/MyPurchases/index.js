import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import useSubscribedGroupsQuery from '~/src/hooks/useSubscribedGroupsQuery'
import Loading from '~/src/modules/MainApp/components/Loading'
import Subtitle from '~/src/modules/MainApp/components/Subtitle'

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
      <Link className={classes.goHome} to='/'>
        &#60;  Volver a la pagina principal
      </Link>
      <Subtitle className={classes.title}>Mis compras</Subtitle>
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
