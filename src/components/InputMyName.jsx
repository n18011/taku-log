import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputMyName = () => (
  <TextField
  required
  label='名前'
  defaultValue='自分'
  size='small'
  variant='outlined' />
)

export default InputMyName
