import styled from "styled-components";

export const ButtonSetting = styled.button`
    color: white;
    background: ${props => props.which === "reset"? (props.touch? "blue":"red"): 
            props.which === "decrease"? (props.touch? "red": "green"): 
            props.which === "increase"? (props.touch? "green" : "blue"): "black"};
`