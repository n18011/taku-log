import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputMyName = ({name, onChange}) => (
  <TextField
  required
  label='名前'
  defaultValue='自分'
  onChange={(e) => onChange(e, name)}
  size='small'
  variant='outlined' />
)

export default InputMyName
