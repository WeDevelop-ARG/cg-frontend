import React from 'react'
import { useFormikContext } from 'formik'
import Select from 'react-select'
import { options, customStyles } from './groupOptions'
import DayPicker from '../DatePicker'
import HourPicker from '../HourPicker'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'

import classes from './styles.module.scss'

const GroupForm = ({ ...stepWizardProps }) => {
  const { setFieldValue } = useFormikContext()

  return (
    <div className={classes.container}>
      <div className={classes.groupSize}>
        <p>Tamaño del grupo</p>
        <Select
          required
          styles={customStyles}
          options={options}
          onChange={({ value }) => { setFieldValue('groupSize', value) }}
          placeholder='Seleccioná la cantidad'
          isSearchable={false}
          components={{
            IndicatorSeparator: () => null
          }}
        />
        <span>La cantidad de personas de un grupo deberá ser la misma que tus unidades a vender</span>
      </div>
      <div className={classes.datePickers}>
        <DayPicker />
        <HourPicker />
      </div>
      <div className={classes.formButtons}>
        <button className={classes.linkBtn} onClick={() => stepWizardProps.previousStep()} type='button'>Volver</button>
        <Button className={classes.publishBtn} type='submit'>Publicar</Button>
      </div>
    </div>
  )
}

export default GroupForm
