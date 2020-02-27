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
    player1: '自分',
    p1Score: 0,
    player2: '',
    p2Score: 0,
    where: 'okinawa',
    game: 3,
    pointList: {
      player1: {},
      player2: {},
    },
    memo: ''
  })
  const [pList, setPList] = React.useState([])

  //  game 数の更新
  const gameChange = event => {
    setScore({...score, game: event.target.value})
  }

  // TODO:: memoの更新

  // TODO:: player nameの更新
  const updateName = (e, who) => {
    setScore({
      ...score,
      [who]: e.target.value
    })
  }

  // スコアの更新
  // TODO:: スコアのオート入力
  const updateScore = (e, which) => {
    setScore({
      ...score,
      [which]: parseInt(e.target.value)
    })
  }

  // pointListにプレイヤーの得点を更新する
  // TODO:: pointのオート入力
  const pointAdd  = (e, who, set) => {
    const pointList = score.pointList
    const w = pointList[who]
    w[set] = parseInt(e.target.value)
    setScore({
      ...score,
      pointList: {
        ...score.pointList,
        [who]: w
      }
    })
  }

  // TODO:: 同じセットを更新すると最初に更新したものが消される問題
  React.useEffect(() => {
    const l = []
    for (var i= 1; i<= score.game; i++) {
          l.push(
          <Grid container alignItems='center' justify='center' key={i}>
            <Grid item xs>
              <InputPoint player='player1' set={i} onChange={pointAdd} key={i}></InputPoint>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>{i}</Typography>
            </Grid>
            <Grid item xs>
              <InputPoint player='player2' set={i} onChange={pointAdd} key={i}></InputPoint>
            </Grid>
          </Grid>
      )
    }
    setPList(l)
    console.log(score)

  }, [score.game])

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

          <Grid container >
            <Grid item xs>
              <InputWhere></InputWhere>
            </Grid>
            <Grid item md={2} />
            <Grid item xs>
              <InputSetMatch game={score.game} onChange={gameChange}></InputSetMatch>
            </Grid>
          </Grid>
          <DialogContentText>
            必須項目は*のある項目です。またゲームスコアが記入されていれば、それぞれのセットのポイントを省くことも可能。
          </DialogContentText>

          <Grid container alignItems='center' justify='center'>
            <Grid item xs>
              <InputMyName name='player1' onChange={updateName}></InputMyName>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>vs</Typography>
            </Grid>
            <Grid item xs>
              <InputOpponent name='player2' onChange={updateName}></InputOpponent>
            </Grid>
          </Grid>

          {pList.reduce((a, v, i) => {
            a[i] = v
            return a
          }, []
          )}

          <Grid container alignItems='center' justify='center'>
            <Grid item xs>
              <InputScore which='p1Score' onChange={updateScore}></InputScore>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>Game*</Typography>
            </Grid>
            <Grid item xs>
              <InputScore which='p2Score' onChange={updateScore}></InputScore>
            </Grid>
          </Grid>

          <InputMemo></InputMemo>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="inherit">
            cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InputFormDialog