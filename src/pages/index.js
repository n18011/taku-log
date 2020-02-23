import React from "react"

import MyTable from '../components/MyTable'
import TestButton from '../components/TestButton'
import ElevationScroll from '../components/ElevationScroll'
import { TakuLogProvider } from '../components/TakuLogContext'
import useAddToHomeScreen from '../components/useAddHomeScreen'

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography
} from '@material-ui/core'


export default () => {
  const [prompt, promptToInstall] = useAddToHomeScreen()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (prompt) {
      setVisible(true)
    }

  }, [prompt])

  return (
    <TakuLogProvider>
      <CssBaseline />
      <ElevationScroll >
        <AppBar>
          <Toolbar>
            <Typography variant="h6" noWrap>TTLog</Typography>
            {!visible ? <div/>: <button onClick={promptToInstall}>Add to home screen</button>}
            <TestButton />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <MyTable></MyTable>
    </TakuLogProvider>
  )
}
