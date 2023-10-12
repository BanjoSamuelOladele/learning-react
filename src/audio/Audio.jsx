import {AudioContainer, AudioTag} from "./Audio.styles";
import AsakeMusic from "./Asake_-_2_30.mp3"


export function Audio(){
    const initialValue = {

    }

    return(
        <AudioContainer>
            <AudioTag controls>
                <source src={AsakeMusic} type={"audio/mp3"}/>
            </AudioTag>
        </AudioContainer>
    )
}