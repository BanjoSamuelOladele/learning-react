import {FirstMainDiv} from "./FirstContainer.styles";
import FirstHeaderContainer from "../firstHeader/FirstHeader";
import FirstMainContainerBodyFunction from "../bodyContainer/FirstMainContaainerBody";
import FirstMainBottom from "../FirstMainContainerBottom/FirstMainBottom";

function FirstLanding(props){
    return(
        <FirstMainDiv>
            <FirstHeaderContainer/>
            <FirstMainContainerBodyFunction/>
            <FirstMainBottom/>
        </FirstMainDiv>
    );
}
export default FirstLanding