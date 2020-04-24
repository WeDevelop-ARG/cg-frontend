import React from 'react'

import useGroupsQuery from '../../hooks/useGroupsQuery'

import Banner from '../../components/HomeBanner'
import CategoryDisplay from '../../components/CategoryDisplay'

import classes from './styles.module.scss'
import categories from './categories'

const Landing = () => {
  const { groups } = useGroupsQuery()

  if (!groups) return undefined

  return (
    <>
      <Banner />
      <div className={classes.container}>
        {
          categories.map((category, index) => (
            <CategoryDisplay
              key={index}
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
