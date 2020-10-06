import React from 'react'

import useGroupsQuery from '~/src/hooks/useGroupsQuery'
import Banner from '~/src/components/HomeBanner'
import CategoryDisplay from '~/src/components/CategoryDisplay'
import Loading from '~/src/components/Loading'

import categories from './categories'

import classes from './styles.module.scss'

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
