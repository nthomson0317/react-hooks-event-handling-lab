// Code Keypad Component Here
import React from 'react'

let keyPad = () => {
    let handleChange = (event) => {
        event.preventDefault()
        console.log('Entering password...')
    }

    return (
        <input onChange={handleChange} type="password"></input>
    )
}

export default keyPad