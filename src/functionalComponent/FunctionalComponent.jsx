import {render} from "react-dom";
import {ButtonSetting} from "./FunctionalComponent.styles";

const {useState} = require("react");
export const StateManagement = () => {
    const [data, setData] = useState(0)
    const [clicking, setClicking] = useState(false)
    const handleCounter = () => {
        setData(data + 1)
        setClicking(!clicking)
    }
    const handleReset = () => {
        setData(0)
        setClicking(!clicking)
    }
    const handleReduce = () => {
        if (data > 0) {
            setData(data - 1)
        }
        setClicking(!clicking)
    }
    return(
        <div>
            <p>{data}</p>
            <ButtonSetting touch={clicking} which={"reset"} onClick={handleReset}>Reset</ButtonSetting>
            <ButtonSetting touch={clicking} which={"decrease"} onClick={handleReduce}>Decrease</ButtonSetting>
            <ButtonSetting touch={clicking} which={"increase"} onClick={handleCounter}>Increase</ButtonSetting>
        </div>
    )
}
// export default StateManagement