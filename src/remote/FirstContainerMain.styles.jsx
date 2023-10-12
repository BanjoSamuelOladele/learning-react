import styled from "styled-components";

export const FirstContainerMainDiv = styled.div`
    margin-left: 300px;
    display: block;
    justify-content: center;
    width: 228px;
    height: 600px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 20px;
    border: 2px gray solid;
`
export const FirstPartDiv = styled.div`
    display: block;
    width: 225px;
    margin-top: 10px;
    border-radius: 20px;
    height: 60px;
`
export const SpeakerHere = styled.img`
    display: inline;
    margin-left: 90px;
    width: 40px;
    height: 10px;
    flex-shrink: 0;
`
export const PowerButtonDivHere = styled.button`
    display: inline;
    margin-top: 10px;
    margin-left: 35px;
    width: 40px;
    height: 35px;
    border-radius: 20px;
`
export const PowerButtonHere = styled.img`
    margin-top: 1px;
    margin-left: -2px;
    width: 30px;
    height: 28px;
    flex-shrink: 0;
`
export const SecondDivHere = styled.div`
    display: block;
    margin-left: 7px;
    margin-top: 12px;
    width: 210px;
    height: 220px;
`
export const FirstBigCircle = styled.div`
    margin-left: 7px;
    margin-top: 13px;
    display: block;
    width: 200px;
    height: 175px;
    flex-shrink: 0;
    border-radius: 60px;
    background: black;
`
export const FirstBigCircleButton = styled.button`
    justify-content: center;
    display: grid;
    width: ${(props) => props.which === "up" || "down" ? "120px": 
            props.which === "left" || "right"? "100px": ""};
    height: 30px;
    border-radius: 50px;
    background: black;
`
export const FirstBigCircleClickImage = styled.img`
    border-radius: 24px;
    margin-top: 7px;
    width: 10px;
    height: 10px;
    background: #DFDFDF;
    flex-shrink: 0;
`
export const FirstBigInnerCircle = styled.button`
    display: block;
    margin-left: 15.5px;
    width: 100px;
    height: 100px;
    border-radius: 200px;
    background: black;
`
export const ButtonContainerForCircle = styled.div`
    display: flex;
    width: ${(props) => props.which === "first" || "third" ? "120px": 
            props.which === "second" || "fourth" ? "100px": ""};
    height: 30px;
    margin-left: ${(props) => props.which === "first"? "41px": 
            props.which === "second"? "-33px": 
            props.which === "third"? "41px": 
            props.which === "fourth"? "120px": ""};
    margin-top: ${(props) => props.which === "second"? "40px": 
            props.which === "fourth"? "-103px": 
            props.which === "third"? "10px" : ""};
    rotate: ${(props) => props.which === "second"? "90deg": 
            props.which === "fourth"? "90deg": ""};
    border-radius: 30px;
    //background: black;
`
export const MiddleContainerDiv = styled.div`
    display: block;
    margin-top: -69px;
    margin-left: 37px;
    width: 112px;
    height: 100px;
`
export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    border-radius: 100px;
    width: 70px;
    height: 60px;
    margin-top: ${(props) => props.side === "upLeft" ? "-3px": 
            props.side === "upRight"? "-3px":"0px"};
    margin-left: ${(props) => props.side === "left"? "5px" : 
            props.side === "right"? "3px": 
            props.side === "upRight"? "46px": 
            props.side === "upLeft"? "13px": "23px"};
    background: black;
`
export const ThirdContainerMainDiv = styled.div`
    display: block;
    width: 210px;
    height: 210px;
    margin-top: 15px;
    margin-left: 7px;
`
export const ThirdContainerFirstInnerDiv = styled.div`
    display: flex;
    width: 210px;
    height: 60px;
`
export const ThirdContainerSecondInnerDiv = styled.div`
    display: inline-grid;
    justify-content: center;
    background: ${(props) => props.side === "third"? "black": ""};
    margin-left: ${(props) => props.side === "third"? "35px": "0px"};
    width: ${(props) => props.side === "second"? "90px": "70px"};
    border-radius: ${(props) => props.side === "third"? "100px": "0px"};
    height: 143px;
`
export const BackButtonImage = styled.img`
    justify-self: center;
    margin-top: 10px;
`