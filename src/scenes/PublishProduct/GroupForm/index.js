import React, { useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import DatePicker, { registerLocale } from 'react-datepicker'
import CurrentStep from '../CurrentStep'
import createGroupHandler from './createGroupHandler'
import Loading from '../../../components/Loading'
import TimePicker from './TimeSelect'
import { options, customStyles } from './groupOptions'
import Button from '../../../components/Button/Default/Orange'
import dayjs from 'dayjs'

import classes from './styles.module.scss'
import calendar from '../../../vectors/calendar.svg'
import clock from '../../../vectors/clock-white.svg'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.scss'
import es from 'date-fns/locale/es'
registerLocale('es', es)

const GroupForm = (props) => {
  const [minParticipants, setMinParticipants] = useState()
  const [expireDate, setExpireDate] = useState(new Date())
  const [expireTime, setExpireTime] = useState('11:59 PM')
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const dropdownRef = useRef(null)
  const dropdownButtonRef = useRef(null)

  const verifyClick = (e) => {
    if (dropdownRef && dropdownButtonRef) {
      if (!dropdownRef.current || !dropdownButtonRef.current) {
        setIsDropdownOpened(false)
      } else if (!dropdownRef.current.contains(e.target) && !dropdownButtonRef.current.contains(e.target)) {
        setIsDropdownOpened(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', verifyClick, false)

    return () => {
      document.removeEventListener('click', verifyClick, false)
    }
  }, [])

  const getDate = (date, time) => {
    const dateStr = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()} ${time}`
    return dayjs(dateStr, 'M-D-YYYY hh:mm A', true).toDate()
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const product = props.product
    const discount = 20
    const type = minParticipants === 2 ? 'PAIR' : 'GROUP'
    const maxParticipants = minParticipants
    const expiresAt = getDate(expireDate, expireTime)

    setIsLoading(true)
    try {
      await createGroupHandler({ product, discount, expiresAt, maxParticipants, minParticipants, type })
    } catch (error) {
      setIsLoading(false)
      return error
    }

    setIsLoading(false)

    props.group({ product, minParticipants, discount, expiresAt })
    props.nextStep()
  }

  if (isLoading) return <Loading />

  return (
    <div className={classes.container}>
      <CurrentStep currentStep={2} />
      <form
        id='create_product_form'
        onSubmit={handleSubmit}
      >
        <div className={classes.FormContainer}>
          <div className={classes.groupForm}>
            <div>
              <p>Tamaño del grupo</p>
              <Select
                required
                styles={customStyles}
                options={options}
                onChange={({ value }) => { setMinParticipants(value) }}
                placeholder='Seleccioná la cantidad'
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null
                }}
              />
              <span>La cantidad de personas de un grupo deberá ser la misma que tus unidades a vender</span>
            </div>
            <div>
              <p>Fecha de expiración</p>
              <div className={classes.dateInput}>
                <img src={calendar} />
                <DatePicker
                  locale='es'
                  dateFormat='dd/MM/yyyy'
                  showPopperArrow={false}
                  selected={expireDate}
                  onChange={date => setExpireDate(date)}
                />
              </div>
            </div>
            <div>
              <p>Hora de expiración</p>
              <div className={classes.timeInput}>
                <img src={clock} />
                <input
                  onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                  ref={dropdownButtonRef}
                  value={expireTime}
                  onChange={() => null}
                />
              </div>
              {
                isDropdownOpened && (
                  <div className={classes.dropdown} ref={dropdownRef}>
                    <TimePicker setTimeString={(val) => setExpireTime(val)} />
                  </div>
                )
              }
            </div>
          </div>

          <div className={classes.formButtons}>
            <button className={classes.linkBtn} onClick={() => props.prevStep()}>&lsaquo; Volver</button>
            <Button className={classes.publishBtn} type='submit'>Publicar</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GroupForm
