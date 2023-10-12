import {
    FirstMainBottomContainer,
    FirstMainBottomContainerImage,
    FirstMainBottomContainerPara,
    FirstMainBottomDiv
} from "./FirstMainBottom.styles";
import MoneyTransfer from "../../assets/running/transfer.svg"

function FirstMainBottom(props){
    return(
        <FirstMainBottomDiv>
            <FirstMainBottomContainer>
                <FirstMainBottomContainerImage src={MoneyTransfer} alt={"transfer"}/>
                <FirstMainBottomContainerPara>Money Transfer</FirstMainBottomContainerPara>
                <FirstMainBottomContainerPara>Money Transfer</FirstMainBottomContainerPara>
                <FirstMainBottomContainerPara>Money Transfer</FirstMainBottomContainerPara>
                <FirstMainBottomContainerPara>Money Transfer</FirstMainBottomContainerPara>
            </FirstMainBottomContainer>
        </FirstMainBottomDiv>
    );
}
export default FirstMainBottom