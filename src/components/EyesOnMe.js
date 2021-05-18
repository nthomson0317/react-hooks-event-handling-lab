// Code EyesOnMe Component Here
import React from 'react'

let eyesOnMe = () => {
    let focusClick = (event) => {
        console.log('Good!')
    }

    let blurClick = (event) => {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={focusClick} onBlur={blurClick}>Eyes on me</button>
    )
}

export default eyesOnMe