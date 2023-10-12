import {FirstMainContainerBody, FirstMainContainerBodyImage} from "./FirstMainContainer.styles";
import BackGroundImage from "../../assets/running/backgroundWithLadies.svg"

function FirstMainContainerBodyFunction(props){
    return(
        <FirstMainContainerBody>
            <FirstMainContainerBodyImage src={BackGroundImage} alt={"Image"}/>
        </FirstMainContainerBody>
    )
}
export default FirstMainContainerBodyFunction