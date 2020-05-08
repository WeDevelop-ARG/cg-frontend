/* global dataLayer */
import { useEffect } from 'react'

export const useFireAnalyticsABPageExperimentEvent = (version) => {
  useEffect(() => {
    dataLayer.push({
      event: 'ABPageExperiment',
      eventABPageExperimentVersion: version
    })
  }, [])
}
