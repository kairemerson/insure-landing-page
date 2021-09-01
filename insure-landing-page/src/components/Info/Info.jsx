import React from "react" 
import {Image, Title, Paragraph, Wrapper} from "./styled"


function Info (props){
    return(
        <Wrapper>
            <Image src={props.image}/>
            <Title>{props.title}</Title>
            <Paragraph>{props.paragraph}</Paragraph>
        </Wrapper>
    )
}

export default Info