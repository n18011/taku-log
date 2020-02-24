import React from 'react'

import {
  Button
} from '@material-ui/core'
import { TakuLogContext } from './TakuLogContext'

export default ({onClick}) => {
  const { data, addData, setData } = React.useContext(TakuLogContext)
  const [score, setScore] = React.useState({
    player1: 'aino',
    p1Point: 11,
    player2: 'nishino',
    p2Point: 0,
    where: 'okinawa'
  })

  React.useEffect(() => {
    console.log(data)
  }, [data])

  const handleClick = () => {
    addData(score)
    onClick()
  }

  return (
    <div>
      { //  TODO::データ一覧表示
      /*
      data.reduce((o, v, i) => {
        o[i] = <div key={i}>{JSON.stringify(v)}</div>
        return o
      }, [])
    */}
      <Button color='primary' onClick={handleClick}>追加</Button>
    </div>
  )
}