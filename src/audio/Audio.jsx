import {AudioContainer, AudioTag} from "./Audio.styles";


export function Audio(){
    const initialValue = {

    }

    return(
        <AudioContainer>
            <AudioTag controls>
                <source src={"C:\\Users\\user\\WebstormProjects\\learning-react\\src\\audio\\Asake_-_2_30.mp3"} type={"audio/mp3"}/>
            </AudioTag>
        </AudioContainer>
    )
}