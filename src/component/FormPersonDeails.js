import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeable from 'material-ui/styles/muiThemeable'
export class FormPersonDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values,handleChange , nextStep} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Enter person details'/>
                   <TextField hintText='Enter your occupation'
                              floatingLabelText='occupation'
                              onChange ={handleChange('occupation')}
                              defaultValue = {values.occupation}/>
                              <br/>
                              <TextField hintText='Enter city'
                              floatingLabelText='City'
                              onChange ={handleChange('city')}
                              defaultValue = {values.city}/>
                              <br/>
                              <TextField hintText='Enter bio'
                              floatingLabelText='Bio'
                              onChange ={handleChange('bio')}
                              defaultValue = {values.bio}/> 
                              <br/>
                              <RaisedButton onClick={this.continue} 
                              label='Continue' 
                              primary={true} 
                              style={style.button}
                              />
                              <RaisedButton onClick={this.back} 
                              label='Back' 
                              primary={false} 
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
export default FormPersonDetails
