import React from 'react'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

const InputSetMatch = ({set, onChange}) => {
  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" size='small'>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          セット*
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={set}
          onChange={onChange}
          labelWidth={labelWidth}
        >
          <MenuItem value={1}>1ゲームマッチ</MenuItem>
          <MenuItem value={2}>2ゲームマッチ</MenuItem>
          <MenuItem value={3}>3ゲームマッチ</MenuItem>
          <MenuItem value={5}>5ゲームマッチ</MenuItem>
          <MenuItem value={7}>7ゲームマッチ</MenuItem>
        </Select>
      </FormControl>
  )
}

export default InputSetMatch