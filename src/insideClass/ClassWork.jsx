// import React, {Component} from "react";
import {ButtonClassWorkStyles, InputName} from "./ButtonClassWork.styles";
import React from "react";

class ClassWork extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            counter: 0
        }
    }
    handleName = (event) =>{
        this.setState({firstName: event.target.value})
    }
    handleLastName = (event) =>{
        this.setState({lastName: event.target.value})
    }
    handleButton = (event) =>{
        this.setState({counter: ++event.target.value})
    }
    render() {
        console.log("first name==>", this.state.firstName)
        console.log("last name==>", this.state.lastName)
        console.log("counter==>", this.state.counter)
        return(
            <div>
                <input name={"firstName"} type={"text"}
                       value={this.state.firstName} onChange={this.handleName}/><br/>
                <InputName name={"lastName"} type={"text"}
                       value={this.state.lastName} onChange={this.handleLastName}/>
                <ButtonClassWorkStyles name={"counter"} value={this.state.counter} btnColor={this.state.counter}
                        onClick={this.handleButton}>{this.state.counter}</ButtonClassWorkStyles>
            </div>
        )
    }
}
export default ClassWork