import React from "react"
import { Wrapper } from "./styled"

function FooterContent(props){
    return(
        <Wrapper>
            <h2>{props.title}</h2>
            {props.paragraphs.map((paragraph)=> <p>{paragraph}</p>)}
            
        </Wrapper>
    )
}

export default FooterContent