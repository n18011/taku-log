import React from "react"

import lf from 'localforage'

import {
    Typography,
    Button
} from '@material-ui/core'

export default () => {
    const handleClick =  React.useCallback(
        () => {
            lf.getItem('backup').then(value => {
            alert(value)
            }).catch(err => {
                console.log(err)
            })
        },[]
    )
    return(
        <div>
<Typography variant='h3'>Hello material UI!</Typography>
<Button onClick={handleClick}>送信</Button>
</div>
    )
}
