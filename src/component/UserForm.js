import React, { Component } from 'react'
import FormUSerDetails from './FormUserDetails'
import FormPersonDetails from './FormPersonDeails'
import Confirm from './Confirm'
import Success from './Success'
export default class UserForm extends Component {
    state ={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //proceed to next step
    nextStep = () =>{
        const {step} = this.state;
        this.setState({step:step + 1})
    }
    //go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({step:step - 1})
    }
    //handle field changes
    handleChange = input => (e) =>{
            this.setState({[input]:e.target.value})
    }
    render() {
        const {step} = this.state;
        const  {firstName , lastName, email, city, occupation, bio} = this.state
        const values = {firstName , lastName, email, city, occupation, bio}
        switch(step){
            case 1:
                return (<FormUSerDetails
                         nextStep = {this.nextStep}
                         handleChange={this.handleChange}
                         values={values}
                />)
            case 2:
                return (<FormPersonDetails
                    nextStep = {this.nextStep}
                    prevStep ={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
           />)
            case 3:
                    return (<Confirm
                        nextStep = {this.nextStep}
                        prevStep ={this.prevStep}
                        values={values}/>)
            case 4:
                return (<Success/>)
        }
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}


    

