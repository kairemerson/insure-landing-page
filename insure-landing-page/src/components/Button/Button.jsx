import React from "react"
import {WButton} from "./styled"

function Button(props){
    return(
        <WButton dark>
            {props.children}
        </WButton>
    )
}

export default Button