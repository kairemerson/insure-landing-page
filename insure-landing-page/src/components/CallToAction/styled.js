import styled from "styled-components";
import colors from "../../colors"
import { WButton } from "../Button/styled"

export const SectionCall = styled.section`
    background-color: ${colors.darkViolet};
    padding: 70px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
export const TitleCall =styled.h1`
    color: white;
    font-size: 3em;
    margin: 0;
    line-height: 40px;
    font-weight: 300;
    max-width: 430px;
` 
export const CallButton = styled(WButton)`
    font-weight: 600;
    font-size: .75em;
    opacity: .8;
    z-index: 1;
    &:hover{
        opacity: 1;
    }
`

export const ImageCall = styled.img`
    position: absolute;
    width: 35%;
    right: 0;
    top: 0;
`