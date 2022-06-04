import React from "react";
import generalInfo from '../styles/generalInfo.css'

class GeneralInfo extends React.Component{
    constructor(props){
        super(props)

        
      }

    render(){
       
        
        return (
            <div className="general-info" >
                <h1>Personal Information</h1>
                <label htmlFor="name">Name</label>
                <input
                 type='text'
                 value={this.props.name}
                 name='name'
                 onChange={(e)=>this.props.handleInput(e, this.props.id)}
                  />

                <label htmlFor="name">Email</label>
                <input
                type='email'
                value={this.props.email}
                 name='email'
                 onChange={(e)=>this.props.handleInput(e, this.props.id)}
                 />

                <label htmlFor="name">Phone Number</label>
                <input
                 type='number'
                 value={this.props.phone}
                 name='phone'
                 onChange={(e)=>this.props.handleInput(e, this.props.id)}
                  />

            </div>

        )


    }


}

export default GeneralInfo