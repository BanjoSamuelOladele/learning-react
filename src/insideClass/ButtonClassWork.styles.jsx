import styled from "styled-components";

export const ButtonClassWorkStyles = styled.button`
    color: #FFFF;
    background: ${(props) => Number(props.btnColor)%10 === 0? "purple":
            Number(props.btnColor)%2 === 0? "red":
            Number(props.btnColor)%5 === 0? "blue":"green"};
    
`
export const InputName = styled.input`
    border: solid red 2px;
`