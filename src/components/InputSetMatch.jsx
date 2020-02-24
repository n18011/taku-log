import React from 'react'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

const InputSetMatch = () => {
  const [set, setSet] = React.useState(1)
  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setSet(event.target.value)
  }
  return (
    <FormControl variant="outlined" >
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          セット
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={set}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value={1}>1セットマッチ</MenuItem>
          <MenuItem value={2}>2セットマッチ</MenuItem>
          <MenuItem value={3}>3セットマッチ</MenuItem>
          <MenuItem value={5}>5セットマッチ</MenuItem>
          <MenuItem value={7}>7セットマッチ</MenuItem>
        </Select>
      </FormControl>
  )
}

export default InputSetMatch