import styled from "styled-components"
import colors from "../../colors"

export const Wrapper = styled.div`
    max-width: 32%;
`

export const Image = styled.img`
    background: url(${props => props.image});
    padding: 10px;
    width: 80px;
    background-repeat: no-repeat;
    border: none;
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
`
