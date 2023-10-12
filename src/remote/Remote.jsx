import React, {Component} from "react";
import {
    BackButton, BackButtonImage,
    ButtonContainerForCircle, ButtonContainerForCircle1, ButtonContainerForCircle2, ButtonContainerForCircle3,
    FirstBigCircle,
    FirstBigCircleButton,
    FirstBigCircleButton1,
    FirstBigCircleButton2, FirstBigCircleButton3,
    FirstBigCircleClickImage,
    FirstBigInnerCircle,
    FirstContainerMainDiv,
    FirstPartDiv, MiddleContainerDiv,
    PowerButtonDivHere,
    PowerButtonHere,
    SecondDivHere,
    SpeakerHere, ThirdContainerFirstInnerDiv, ThirdContainerMainDiv, ThirdContainerSecondInnerDiv
} from "./FirstContainerMain.styles";
import Speaker from "./assets/ic/speaker.svg"
import PowerButton from "./assets/ic/power.png"
import Dot from "./assets/ic/dot.svg"
import BackingButton from "./assets/ic/back.svg"
import Screen from "./assets/ic/screen.svg"
import PausePlay from "./assets/ic/playpause.svg"
import MutePlay from "./assets/ic/mute.svg"
import IncreaseVolume from "./assets/ic/plus.svg"
import DecreaseVolume from "./assets/ic/minus.svg"



class ClassRemote extends Component{
    constructor(props) {
        super(props);
        this.state = {
            power: false,
            volume: 0,
            channel: 1,
            speaker: true
        }
    }
    handlePower = (event) =>{
        if (this.state.power === false) {
            this.setState({power: true})
        }
        else this.setState({power: false})
    }
    handleVolume = () =>{
        if (this.state.power === true){
            if (this.state.volume < 30) {
                this.setState({volume: ++this.state.volume})
            }
            if (this.state.speaker === false){
                this.setState({speaker: true})
            }
        }
    }
    handVolumeDown = () =>{
        if (this.state.power === true){
            if (this.state.volume > 0) {
                this.setState({volume: --this.state.volume})
            }
            if (this.state.volume === 0){
                this.setState({speaker: false})
            }
            if (this.state.speaker === false){
                this.setState({speaker: true})
            }
        }
    }
    handleChannelForward = () => {
        if (this.state.power){
            if (this.state.channel < 15){
                this.setState({channel: ++this.state.channel})
            }
        }
    }
    handleChannelDown = () => {
        if (this.state.power){
            if (this.state.channel > 1){
                this.setState({channel: --this.state.channel})
            }
        }
    }
    handleMute = () => {
        if (this.state.power === true) {
            if (this.state.speaker === true) {
                this.setState({speaker: false})
            }
            else this.setState({speaker: true})
        }
    }
    render() {
        console.log("power state=>", this.state.power)
        console.log("volume state=>", this.state.volume)
        console.log("channel state=>", this.state.channel)
        console.log("speaker active=>", this.state.speaker)
        return(
            <div>
                <p>volume {this.state.volume}</p>
                <p>channel {this.state.channel}</p>
                <FirstContainerMainDiv>
                   <FirstPartDiv>
                       <SpeakerHere src={Speaker} alt={"speaker"}/>
                       <PowerButtonDivHere name={"Power_Button"} btn={"power"} onClick={this.handlePower}>
                           <PowerButtonHere src={PowerButton} alt={"power button"}/>
                       </PowerButtonDivHere>
                   </FirstPartDiv>

                    <SecondDivHere>
                        <FirstBigCircle>
                            <ButtonContainerForCircle which={"first"}>
                                <FirstBigCircleButton which={"up"}>
                                    <FirstBigCircleClickImage src={Dot} alt={"clickable"} side={"up"}/>
                                </FirstBigCircleButton>
                            </ButtonContainerForCircle>
                            <ButtonContainerForCircle which={"second"}>
                                <FirstBigCircleButton which={"left"} onClick={this.handleChannelDown}>
                                    <FirstBigCircleClickImage src={Dot} alt={"clickable"} side={"left"}/>
                                </FirstBigCircleButton>
                            </ButtonContainerForCircle>
                            <MiddleContainerDiv>
                                <FirstBigInnerCircle/>
                            </MiddleContainerDiv>
                            <ButtonContainerForCircle which={"third"}>
                                <FirstBigCircleButton which={"down"}>
                                    <FirstBigCircleClickImage src={Dot} alt={"clickable"} side={"down"}/>
                                </FirstBigCircleButton>
                            </ButtonContainerForCircle>
                            <ButtonContainerForCircle which={"fourth"}>
                                <FirstBigCircleButton which={"right"} onClick={this.handleChannelForward}>
                                    <FirstBigCircleClickImage src={Dot} alt={"clickable"} side={"right"}/>
                                </FirstBigCircleButton>
                            </ButtonContainerForCircle>
                        </FirstBigCircle>
                    </SecondDivHere>
                    <ThirdContainerMainDiv>
                        <ThirdContainerFirstInnerDiv side={"first"}>
                            <BackButton side={"upLeft"}>
                                <BackButtonImage src={BackingButton} alt={"back-button"}/>
                            </BackButton>
                            <BackButton side={"upRight"}>
                                <BackButtonImage src={Screen} alt={"Screen-button"}/>
                            </BackButton>
                        </ThirdContainerFirstInnerDiv>
                        <ThirdContainerSecondInnerDiv side={"second"}>
                            <BackButton side={"left"}>
                                <BackButtonImage src={PausePlay} alt={"PausePlay-button"}/>
                            </BackButton>
                            <BackButton side={"left"} onClick={this.handleMute}>
                                <BackButtonImage src={MutePlay} alt={"Mute-button"}/>
                            </BackButton>
                        </ThirdContainerSecondInnerDiv>
                        <ThirdContainerSecondInnerDiv side={"third"}>
                            <BackButton side={"right"} which={"up"} onClick={this.handleVolume}>
                                <BackButtonImage src={IncreaseVolume} alt={"Increase-button"}/>
                            </BackButton>
                            <BackButton side={"right"} onClick={this.handVolumeDown}>
                                <BackButtonImage src={DecreaseVolume} alt={"Decrease-button"}/>
                            </BackButton>
                        </ThirdContainerSecondInnerDiv>
                    </ThirdContainerMainDiv>
                </FirstContainerMainDiv>
            </div>
        )
    }
}
export default ClassRemote