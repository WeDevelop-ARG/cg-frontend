import React, { useState, useRef, useEffect, useCallback } from 'react'
import TimePicker from './TimeSelect'
import dayjs from 'dayjs'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import { useFormikContext } from 'formik'

import classes from './styles.module.scss'
import clock from '~/src/vectors/clock-white.svg'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const HourPicker = () => {
  const { values, setFieldValue } = useFormikContext()
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const dropdownRef = useRef(null)
  const dropdownButtonRef = useRef(null)

  const verifyClick = useCallback((e) => {
    const hasToCloseDropdown =
      (!dropdownRef.current || !dropdownButtonRef.current) ||
      (!dropdownRef.current.contains(e.target) && !dropdownButtonRef.current.contains(e.target))

    if (dropdownRef && dropdownButtonRef && hasToCloseDropdown) {
      setIsDropdownOpened(false)
    }
  }, [])

  const handleChangeHour = (val) => {
    if (values?.hourExpiresAt !== val) setFieldValue('hourExpiresAt', val)
  }

  useEffect(() => {
    document.addEventListener('click', verifyClick, false)

    return () => {
      document.removeEventListener('click', verifyClick, false)
    }
  }, [])

  return (
    <div className={classes.expire}>
      <p>Hora de expiración</p>
      <div className={classes.timeInput}>
        <img src={clock} />
        <input
          onClick={() => setIsDropdownOpened(!isDropdownOpened)}
          ref={dropdownButtonRef}
          value={values?.hourExpiresAt}
          onChange={() => null}
          readOnly
        />
      </div>
      {isDropdownOpened && (
        <div className={classes.dropdown}>
          <TimePicker setTimeString={handleChangeHour} ref={dropdownRef} />
          <div className={classes.dropBtn}>
            <Button type='button' onClick={() => setIsDropdownOpened(false)}>Aplicar</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HourPicker
