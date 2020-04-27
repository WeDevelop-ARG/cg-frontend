import React from 'react'

import useGroupsQuery from '../../hooks/useGroupsQuery'

import Banner from '../../components/HomeBanner'
import CategoryDisplay from '../../components/CategoryDisplay'

import classes from './styles.module.scss'
import categories from './categories'
import Loading from '../../components/Loading'

const Landing = () => {
  const { groups, loading } = useGroupsQuery()

  if (!groups) return undefined

  if (loading) return <Loading />

  return (
    <>
      <Banner />
      <div className={classes.container}>
        {
          categories.map((category) => (
            <CategoryDisplay
              key={category.key}
              title={category.title}
              groups={groups.filter(category.groupFilter)}
            />
          ))
        }
      </div>
    </>
  )
}

export default Landing
