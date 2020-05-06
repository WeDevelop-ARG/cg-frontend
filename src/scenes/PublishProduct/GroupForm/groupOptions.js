export const options = [
  { value: 2, label: 'Grupo de 2' },
  { value: 10, label: 'Grupo de 10' },
  { value: 20, label: 'Grupo de 20' },
  { value: 30, label: 'Grupo de 30' },
  { value: 50, label: 'Grupo de 50' },
  { value: 70, label: 'Grupo de 70' },
  { value: 100, label: 'Grupo de 100' }
]

export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '300px',
    minHeight: '1px',
    fontSize: '16px',
    marginBottom: '16px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '13px'
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '10px 16px',
    color: state.isSelected || state.isFocused ? 'blue' : 'black',
    backgroundColor: state.isSelected || state.isFocused ? 'rgba(53, 97, 209, 0.12)' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    boxShadow: 'none',
    border: '1px solid #F1F3F3'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'blue' : 'black',
    '&:hover': {
      color: 'blue'
    }
  })
}
