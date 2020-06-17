import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List , ListItem} from 'material-ui/List'
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
        const {values, handleChange, nextStep} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Confirm'/>
                       <List>
                           <ListItem primaryText='first Name' secondaryText={values.firstName}/>
                           <ListItem primaryText='last Name' secondaryText={values.lastName}/>
                           <ListItem primaryText='Email' secondaryText={values.email}/>
                           <ListItem primaryText='occupation' secondaryText={values.occupation}/>
                           <ListItem primaryText='City' secondaryText={values.city}/>
                           <ListItem primaryText='Bio' secondaryText={values.bio}/>
                       
                       </List>
                              <RaisedButton onClick={this.continue} 
                              label='Confirm & Continue' 
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
