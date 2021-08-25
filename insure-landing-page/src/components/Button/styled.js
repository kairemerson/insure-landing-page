import styled from "styled-components";
import colors from "../../colors"

export const WButton = styled.button`
    background: transparent;
    color: ${props => props.dark ? colors.darkViolet: "white"};
    border: 2px solid ${props => props.dark ? colors.darkViolet : "white"};
    padding: 10px 24px;
    font-size: 0.78em;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background: ${props => props.dark ? colors.veryDarkViolet : "white"};
        color: ${props => props.dark ? "white" : colors.veryDarkViolet};
    }
`