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

import InputWhere from './InputWhere'
import InputSetMatch from './InputSetMatch'
import InputMyName from './InputMyName'
import InputOpponent from './InputOpponent'
import InputPoint from './InputPoint'
import InputScore from './InputScore'
import InputMemo from './InputMemo'
import { TakuLogContext } from './TakuLogContext'

const InputFormDialog = () => {
  const { addData } = React.useContext(TakuLogContext)
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [point, setPoint] = React.useState({
      player1point: {},
      player2point: {},
  })
  const [score, setScore] = React.useState({
    player1: '自分',
    p1Score: 0,
    player2: '',
    p2Score: 0,
    where: 'okinawa',
    game: 3,
    memo: ''
  })
  const [pList, setPList] = React.useState([])

  //  game 数の更新
  const gameChange = event => {
    setScore({...score, game: event.target.value})
  }

  // 場所の更新
  //  memoの更新
  // player nameとwhereの更新
  const updateValue = (e, id) => {
    setScore({
      ...score,
      [id]: e.target.value
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
  const pointAdd  = React.useCallback((e, who, set) => {
    const w = point[who]
    w[set] = parseInt(e.target.value)
    setPoint({
      ...point,
      [who]: w
    })
  }, [point])

  React.useEffect(() => {
    const l = []
    for (var i= 1; i<= score.game; i++) {
          l.push(
          <Grid container alignItems='center' justify='center' key={i}>
            <Grid item xs>
              <InputPoint player='player1point' set={i} onChange={pointAdd} ></InputPoint>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>{i}</Typography>
            </Grid>
            <Grid item xs>
              <InputPoint player='player2point' set={i} onChange={pointAdd} ></InputPoint>
            </Grid>
          </Grid>
      )
    }
    setPList(l)

  }, [score.game, pointAdd])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const saveClick = () => {
    addData({...score, ...point})
    handleClose()
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
              <InputWhere id='where' onChange={updateValue}></InputWhere>
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
              <InputMyName id='player1' onChange={updateValue}></InputMyName>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' align='center'>vs</Typography>
            </Grid>
            <Grid item xs>
              <InputOpponent id='player2' onChange={updateValue}></InputOpponent>
            </Grid>
          </Grid>

          {pList}

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

          <InputMemo id='memo' onChange={updateValue}></InputMemo>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            cancle
          </Button>
          <Button onClick={saveClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InputFormDialog