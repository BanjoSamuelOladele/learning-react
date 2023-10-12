import React, {Component} from "react";
import {
    SecondTelevisionStand,
    TelevisionMainContainer,
    TelevisionOuterContainer, TelevisionShowRemote,
    TelevisionStand
} from "./Television.styles";
import Remote from "../remote/Remote";

class Television extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRemote: false
        }
    }
    handShowRemote = () => {
        if (this.state.showRemote === false){
            this.setState({showRemote: true})
        }
        else this.setState({showRemote: false})
    }
    render() {
        console.log("showRemote status =>", this.state.showRemote)

        return(
            <TelevisionOuterContainer>
                <TelevisionMainContainer/>
                <TelevisionStand/>
                <SecondTelevisionStand/>
                <TelevisionShowRemote
                    name={"remote"} action={this.state.showRemote}
                    onClick={this.handShowRemote}>Show Remote</TelevisionShowRemote>
            </TelevisionOuterContainer>
        )
    }
}
export default Television