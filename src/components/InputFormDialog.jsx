import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';

import InputWhen from './InputWhen'
import InputWhere from './InputWhere'
import InputSetMatch from './InputSetMatch'
import InputMyName from './InputMyName'
import InputOpponent from './InputOpponent'
import InputPoint from './InputPoint'
import InputScore from './InputScore'
import InputMemo from './InputMemo'
import TestButton from './TestButton'

const InputFormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" color="inherit" onClick={handleClickOpen}>
        <PostAddIcon></PostAddIcon>
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">新しいスコア</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
          <InputWhere></InputWhere>
          <InputSetMatch></InputSetMatch>
          <InputMyName></InputMyName>
          <InputOpponent></InputOpponent>
          <InputPoint></InputPoint>
          <InputScore></InputScore>
          <InputMemo></InputMemo>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <TestButton onClick={handleClose}></TestButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InputFormDialog