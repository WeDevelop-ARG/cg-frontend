/* global dataLayer */

export function logFormSubmit (formId, timeoutMS = 1500) {
  return new Promise((resolve, reject) => {
    let resolved = false
    const resolvePromise = () => {
      if (resolved) return undefined

      resolved = true
      resolve()
    }

    dataLayer.push({
      event: 'FORM_SUBMIT',
      eventSubmittedFormId: formId,
      eventCallback: resolvePromise
    })
    setTimeout(resolvePromise, timeoutMS)
  })
}
