import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputOpponent = ({id, onChange}) => (
  <TextField
  required
  label='対戦相手'
  size='small'
  onChange={(e) => onChange(e, id)}
  variant='outlined' />
)

export default InputOpponent
