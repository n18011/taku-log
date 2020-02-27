import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textaria: {
    width: '200px',
    [theme.breakpoints.up('sm')]: {
      width: '400px'
    }
  }
}))
const InputMemo = ({id, onChange}) => {
  const classes = useStyles()
  return (
    <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >メモ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <TextareaAutosize
        className={classes.textaria}
        rowsMin={2}
      rowsMax={4}
      onChange={(e) => onChange(e, id)}
      placeholder="自由記入"
    />
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default InputMemo