import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export default function Success() {
    return (
        <div>
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Your information Successfuly added '/>
                   <h1>Thank you for your Submission</h1>
                   <p>You will get an email with further instruction </p>
                </React.Fragment>
                </MuiThemeProvider>
        </div>
    )
}
