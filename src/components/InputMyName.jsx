import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputMyName = ({id, onChange}) => (
  <TextField
  required
  label='名前'
  defaultValue='自分'
  onChange={(e) => onChange(e, id)}
  size='small'
  variant='outlined' />
)

export default InputMyName
