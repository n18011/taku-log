import React from "react"

import MyTable from '../components/MyTable'
import ElevationScroll from '../components/ElevationScroll'
import InputFormDialog from '../components/InputFormDialog'
import { TakuLogProvider } from '../components/TakuLogContext'
import useAddToHomeScreen from '../components/useAddHomeScreen'

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton
} from '@material-ui/core'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'


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
            <Typography variant="h6" edge='start' noWrap>TTLog</Typography>
            {!visible ? <div/>: 
            <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={promptToInstall}
          >
            <AddToHomeScreenIcon />
          </IconButton>}
          <InputFormDialog></InputFormDialog>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <MyTable />
    </TakuLogProvider>
  )
}
