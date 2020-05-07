import { useEffect } from 'react'

export const useSetAnalyticsABPageExperimentTag = (tag) => {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.setAttribute('itemprop', 'A/B Experiment')
    meta.setAttribute('content', tag)
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])
}
