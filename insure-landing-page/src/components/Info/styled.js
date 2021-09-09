import styled from "styled-components"
import colors from "../../colors"

export const Wrapper = styled.div`
    max-width: 32%;
    @media screen and (max-width: 765px){
        max-width: 100%;
        justify-content: center;
    }
`

export const Image = styled.img`
    background: url(${props => props.image});
    width: 80px;
    background-repeat: no-repeat;
    border: none;
    @media screen and (max-width: 765px){
        width: 100px;
    }
` 

export const Title = styled.h2`
    font-weight: 300;
    font-size: 1.6em;
`

export const Paragraph = styled.p`
    font-size: 1em;
    font-weight: 200;
    color: ${colors.darkGrayishViolet};
    max-width: 340px;
    @media screen and (max-width: 765px){
        width: 97%;
        font-size: 1.06em;
        margin: 6px auto;
    }
`
