import styled from "styled-components";
import colors from "../../colors"

export const Section = styled.section`
    padding: 250px 0;
    @media screen and (max-width: 765px){
        padding: 150px 0;
        & > div{
            padding: 0 2%;
            text-align: center;
        }
    }
`

export const Title = styled.h1`
    font-size: 4em;
    font-weight: 300;
    @media screen and (max-width: 765px){
        font-size: 3em;
    }
`
export const Line = styled.div`
    width: 12%;
    border-top: 1px solid ${colors.grayishBlue};
    @media screen and (max-width: 765px){
        width: 40%;
        margin: 0 auto;
    }
`

export const WrapperDif = styled.div`
    display: flex;
    gap: 30px;
    @media screen and (max-width: 765px){
        flex-wrap: wrap;
        justify-content: center;
    }
`