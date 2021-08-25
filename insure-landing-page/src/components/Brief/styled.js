import styled from "styled-components"
import colors from "../../colors"

export const Section = styled.section`
    background-color: ${colors.darkViolet};
    color: white;
    padding-top: 8%;
    padding-bottom: 8%;
    div.line{
        width: 16%;
        border-top: 1px solid ${colors.veryLightGray};
        opacity: .7;
        margin-bottom: 60px;
    }
    div{
        width: 63%;
    }
    img{
        position: absolute;
        top: 185px;
        left: 52%;
        width: 37%;
    }
    h1{
        width: 87%;
        font-weight: 200;
        font-size: 4em;
        margin: 5px 0;
        line-height: .95em;
    }
    p{
        color: white;
        opacity: .8;
        font-weight: 200;
        line-height: 1.5em;
        margin: 30px 0;
    }
`