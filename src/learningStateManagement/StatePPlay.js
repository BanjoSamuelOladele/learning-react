import {useState} from "react";


export function StatePlay(){
    const initialValue = {
        name: "",
        weight: 0.0
    }
    const [data, setData] = useState(initialValue)
    const [veri, setVeri] = useState(false)
    const handleEvent = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    return(
        <div>
            <p>{data.name}</p>
            <p>{data.weight}</p>
            <p>{veri}</p>
            <input name={"name"} value={data.name} onChange={handleEvent} type={"text"}/>
            <input name={"isVerified"} value={veri} onChange={handleEvent} type={"text"}/>
            <input name={"weight"} value={data.weight} onChange={handleEvent} type={"text"}/>
        </div>
    )
}






