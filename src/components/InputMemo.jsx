import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const InputMemo = () => {
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
        rowsMin={2}
      rowsMax={4}
      placeholder="自由記入"
    />
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default InputMemo