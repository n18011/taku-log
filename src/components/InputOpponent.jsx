import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputOpponent = ({name, onChange}) => (
  <TextField
  required
  label='対戦相手'
  size='small'
  onChange={(e) => onChange(e, name)}
  variant='outlined' />
)

export default InputOpponent
