import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeable from 'material-ui/styles/muiThemeable'
export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange, nextStep} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Enter user details'/>
                   <TextField hintText='Enter your first name'
                              floatingLabelText='Firest Name'
                              onChange ={handleChange('firstName')}
                              defaultValue = {values.firstName}/>
                              <br/>
                              <TextField hintText='Enter your last name'
                              floatingLabelText='Last Name'
                              onChange ={handleChange('lastName')}
                              defaultValue = {values.lastName}/>
                              <br/>
                              <TextField hintText='Enter your email'
                              floatingLabelText='Email'
                              onChange ={handleChange('email')}
                              defaultValue = {values.email}/> 
                              <br/>
                              <RaisedButton onClick={this.continue} 
                              label='Continue' 
                              primary={true} 
                              style={style.button}
                              />
                                    
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const style ={
    button :{
       margin:15
    }
}
export default FormUserDetails
