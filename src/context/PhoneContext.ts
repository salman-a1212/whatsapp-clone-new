import React, { createContext, useState } from "react"

export const PhoneContext = createContext();

export const PhoneNumber = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <PhoneContext.Provider value= { [phoneNumber, setPhoneNumber]} >
        { props.children }
        </PhoneContext.Provider>
    )
}