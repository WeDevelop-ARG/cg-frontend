import React from 'react'
import { useFormikContext } from 'formik'
import DatePicker, { registerLocale } from 'react-datepicker'
import dayjs from 'dayjs'
import useMediaQuery from '~/src/hooks/useMediaQuery'

import calendar from '~/src/vectors/calendar.svg'
import classes from './styles.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.scss'

import es from 'date-fns/locale/es'
const BREAK_POINT = '(max-device-width: 576px)'
registerLocale('es', es)

const GroupForm = () => {
  const { values, setFieldValue } = useFormikContext()
  const isMobile = useMediaQuery(BREAK_POINT)

  return (
    <div className={classes.expire}>
      <p>Fecha de expiración</p>
      <div className={classes.dateInput}>
        <img src={calendar} />
        <DatePicker
          inputProps={{ readOnly: true }}
          onFocus={e => e.target.blur()}
          locale='es'
          dateFormat='dd/MM/yyyy'
          showPopperArrow={false}
          selected={dayjs(values?.dayExpiresAt).toDate()}
          onChange={(date) => setFieldValue('dayExpiresAt', dayjs(date).toISOString())}
          withPortal={isMobile ? 1 : 0}
        />
      </div>
    </div>
  )
}

export default GroupForm
