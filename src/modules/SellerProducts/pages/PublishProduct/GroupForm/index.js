import React, { useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import DatePicker, { registerLocale } from 'react-datepicker'
import CurrentStep from '../CurrentStep'
import createGroupHandler from './createGroupHandler'
import Loading from '~/src/modules/MainApp/components/Loading'
import TimePicker from './TimeSelect'
import { options, customStyles } from './groupOptions'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import useMediaQuery from '~/src/hooks/useMediaQuery'

import classes from './styles.module.scss'
import calendar from '~/src/vectors/calendar.svg'
import clock from '~/src/vectors/clock-white.svg'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.scss'
import es from 'date-fns/locale/es'
import { logFormSubmit } from '~/src/utils/analytics'
registerLocale('es', es)
const BREAK_POINT = '(max-device-width: 576px)'

const GroupForm = ({ product, group, nextStep, prevStep }) => {
  dayjs.extend(customParseFormat)
  const isMobile = useMediaQuery(BREAK_POINT)
  const [minParticipants, setMinParticipants] = useState()
  const [expireDate, setExpireDate] = useState(new Date())
  const [expireTime, setExpireTime] = useState('11:59 PM')
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const dropdownRef = useRef(null)
  const dropdownButtonRef = useRef(null)
  const timeRef = useRef(null)

  const verifyClick = (e) => {
    if (isMobile) {
      if (dropdownRef && dropdownButtonRef) {
        if (!dropdownRef.current || !dropdownButtonRef.current) {
          setIsDropdownOpened(false)
        } else if (!dropdownRef.current.contains(e.target) && !dropdownButtonRef.current.contains(e.target)) {
          setIsDropdownOpened(false)
        }
      }
    } else if (dropdownRef && dropdownButtonRef) {
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
    return dayjs(dateStr, 'M-D-YYYY hh:mm A', true).toISOString()
  }

  const formatHour = (hour) => {
    const dateStr = `${expireDate.getMonth() + 1}-${expireDate.getDate()}-${expireDate.getFullYear()} ${hour}`
    const hourFormated = dayjs(dateStr, 'M-D-YYYY HH:mm').format('hh:mm A')

    return setExpireTime(hourFormated)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { discount, ...productData } = product
    const type = minParticipants === 2 ? 'PAIR' : 'GROUP'
    const maxParticipants = minParticipants
    const expiresAt = getDate(expireDate, expireTime)

    setIsLoading(true)
    try {
      await createGroupHandler({ product: productData, discount, expiresAt, maxParticipants, minParticipants, type })
      await logFormSubmit('create_product_form')
    } catch (error) {
      setIsLoading(false)
      return error
    }

    setIsLoading(false)

    group({ product, minParticipants, discount, expiresAt })
    nextStep()
  }

  if (isLoading) return <Loading />

  return (
    <>
      <div className={classes.container}>
        <CurrentStep currentStep={2} onBackButton={prevStep} />
        <form>
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
                    selected={expireDate}
                    onChange={date => setExpireDate(date)}
                    withPortal={isMobile ? 1 : 0}
                  />
                </div>
              </div>
              <div className={classes.expire}>
                <p>Hora de expiración</p>
                <div className={classes.timeInput}>
                  <img src={clock} />
                  {
                    !isMobile ? (
                      <input
                        onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                        ref={dropdownButtonRef}
                        value={expireTime}
                        onChange={() => null}
                        readOnly
                      />
                    ) : (
                      <>
                        <div
                          className={classes.timeMobileInput}
                          onClick={() => timeRef.current.click()}
                        >
                          {expireTime}
                        </div>
                        <input
                          ref={timeRef}
                          style={{ visibility: 'hidden', width: 0, height: 0, position: 'absolute' }}
                          onChange={({ target }) => formatHour(target.value)}
                          type='time'
                        />
                      </>
                    )
                  }
                </div>
                {
                  isDropdownOpened && (
                    <div className={classes.dropdown}>
                      <TimePicker setTimeString={(val) => setExpireTime(val)} ref={dropdownRef} />
                      <div className={classes.dropBtn}>
                        <Button type='button' onClick={() => setIsDropdownOpened(false)}>Aplicar</Button>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className={classes.formButtons}>
              <button className={classes.linkBtn} onClick={() => prevStep()}>&lsaquo; Volver</button>
              <Button className={classes.publishBtn} onClick={handleSubmit} type='button'>Publicar</Button>
            </div>
          </div>
        </form>
      </div>
      <div className={classes.formButtonsMobile}>
        <button className={classes.linkBtn} onClick={() => prevStep()}>&lsaquo; Volver</button>
        <Button className={classes.publishBtn} onClick={handleSubmit} type='button'>Publicar</Button>
      </div>
    </>
  )
}

export default GroupForm
