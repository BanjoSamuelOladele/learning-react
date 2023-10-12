import {useReducer, useState} from "react";
import {ButtonText, InputStyle, TextContain, UserDetailContain} from "./UserDetails.styles";


function reducer(state, action){
    switch (action.type){
        case "handleChange":
            return{
                ...state,
                [action.fields] : action.payload
            }
        case "handleButtonText":
            return {
                ...state,
                [action.fields] : action.payload
            }
    }
}

export function UserDetails(){
    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        height: 0.0,
        userName: "",
        buttonText: ""
    }
    //using the useState function
    // const [data, setData] = useState(initialValue)
    // const handleChange = (event) => {
    //     setData((prevState) =>({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    //using reducer
    const [data, dispatch] = useReducer(reducer, initialValue)
    const handleChange = (event) =>{
        dispatch({
            type: "handleChange",
            fields: event.target.name,
            payload: event.target.value
        })
    }
    const handleButtonText = (event) => {
        dispatch({
            type: "handleButtonText",
            fields: event.target.name,
            payload: "Oladele..."
        })
    }

    return(
        <UserDetailContain>
            <TextContain>First Name: {data.firstName}</TextContain>
            <TextContain>Last Name: {data.lastName}</TextContain>
            <TextContain>User Name: {data.userName}</TextContain>
            <TextContain>Email: {data.email}</TextContain>
            <TextContain>Age: {data.age}</TextContain>
            <TextContain>Height: {data.height}</TextContain>
            <TextContain>ButtonText: {data.buttonText}</TextContain>

            <UserDetailContain>
                <InputStyle value={data.firstName} name={"firstName"} type={"text"} onChange={handleChange}/>
                <InputStyle value={data.lastName} name={"lastName"} type={"text"} onChange={handleChange}/>
                <InputStyle value={data.userName} name={"userName"} type={"text"} onChange={handleChange}/>
                <InputStyle value={data.email} name={"email"} type={"email"} onChange={handleChange}/>
                <InputStyle value={data.age} name={"age"} type={"number"} onChange={handleChange}/>
                <InputStyle value={data.height} name={"height"} type={"number"} onChange={handleChange}/>
                <ButtonText value={data.buttonText} name={"buttonText"} onClick={handleButtonText}>Click Me</ButtonText>
            </UserDetailContain>
        </UserDetailContain>
    )
}