import React from 'react'

const InputNormal = ({
  name,
  handleChange,
  value,
  touched,
  errors,
  isSubmitting = false,
  handleBlur
}) => {
  const isTouched = () => {
    if (touched[name]) return 'input__normal--focused'

    return 'input__normal'
  }
  return (
    <>
      <input
        className={
          errors[name] ? 'input__normal--error' : isTouched()
        }
        name={name}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        disabled={isSubmitting}
      />
      {errors[name] && touched[name] && <div className='input__normal__error-text'>{errors[name]}</div>}
    </>
  )
}

export default InputNormal
