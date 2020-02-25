import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputPoint = ({player, set, onChange}) => (
  <TextField
  type='Number'
  size='small'
  onChange={(e) => onChange(e, player, set)}
  variant='outlined' />
)

export default InputPoint
