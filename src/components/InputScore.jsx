import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputScore = ({onChange, which}) => (
  <TextField
  required
  type='Number'
  size='small'
  onChange={(e) => onChange(e, which)}
  variant='outlined' />
)

export default InputScore
