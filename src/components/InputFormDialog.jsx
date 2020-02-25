import React from 'react';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  const [score, setScore] = React.useState({
    player1: 'aino',
    p1Score: 11,
    player2: 'nishino',
    p2Score: 0,
    where: 'okinawa',
    set: 3,
    pointList: {
      player1: {},
      player2: {}
  }
  })
  const [pList, setPList] = React.useState([])

  React.useEffect(() => {
    const l = []
    for (var i= 1; i<= score.set; i++) {
          l.push(<Grid container alignItems='center' justify='center'>
            <Grid item xs>
              <InputPoint></InputPoint>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>{i}</Typography>
            </Grid>
            <Grid item xs>
              <InputPoint></InputPoint>
            </Grid>
          </Grid>
      )
    }
    setPList(l)

  }, [score.set])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setScore({...score, set: event.target.value})
  }


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

          <Grid container >
            <Grid item xs>
              <InputWhere></InputWhere>
            </Grid>
            <Grid item md={2}>

            </Grid>
            <Grid item xs>
              <InputSetMatch set={score.set} onChange={handleChange}></InputSetMatch>
            </Grid>
          </Grid>
          <DialogContentText>
            必須項目は*のある項目です。またゲームスコアが記入されていれば、それぞれのセットのポイントを省くことも可能。
          </DialogContentText>

          <Grid container alignItems='center' justify='center'>
            <Grid item xs>
              <InputMyName></InputMyName>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>vs</Typography>
            </Grid>
            <Grid item xs>
              <InputOpponent></InputOpponent>
            </Grid>
          </Grid>

          {pList}

          <Grid container alignItems='center' justify='center'>
            <Grid item xs>
              <InputScore></InputScore>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>Game*</Typography>
            </Grid>
            <Grid item xs>
              <InputScore></InputScore>
            </Grid>
          </Grid>

          <InputMemo></InputMemo>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InputFormDialog