import React, { createContext } from 'react'
import lf from 'localforage'


const TakuLogContext = createContext()

const TakuLogProvider = ({ children }) => {
  const [view, setView] = React.useState(true)
  const [data, setData] = React.useState([])

  // 画面用データ更新
  React.useEffect(() => {
    view && lf.getItem('taku-log').then(value => {
      value && setData(value)
      console.log('local strage is:', value)
    }).catch(err => {
      console.log(err)
    })
  }, [view])

  // データ追加
  const addData = React.useCallback((value) => {
    setView(false)
    lf.setItem('taku-log', [...data, value]).then(v => {
      console.log(v + ' として保存しました')
      setView(true)
    }).catch(err => {
      console.log(err)
      setView(true)
    })
  }, [data])

  /*
  // TODO::データ更新 
  // TODO::データ削除 
  const deleteData = React.useCallback(() => {
    lf.removeItem('taku-log').then(() => {
      console.log('データを削除しました')
    }).catch(err => {
      console.log(err)
    })
  }, [])
  */

  return (
    <TakuLogContext.Provider value={{ data, setData, addData }}>
      {children}
    </TakuLogContext.Provider>
  )
}

export { TakuLogContext, TakuLogProvider }