import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export default function Success() {
    return (
        <div>
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Your information Successfuly added '/>
                </React.Fragment>
                </MuiThemeProvider>
        </div>
    )
}
