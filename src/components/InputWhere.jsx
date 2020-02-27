import React from 'react'

import TextField from '@material-ui/core/TextField'

const InputWhere = ({id, onChange}) => (
  <TextField
  label='場所or大会名'
  size='small'
  onChange={(e) => onChange(e, id)}
  variant='outlined' />
)

export default InputWhere
