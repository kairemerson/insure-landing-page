import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
    padding: 40px 0;
    @media screen and (max-width: 765px){
        padding: 10px 0;
    }
    h2{
        font-family: 'Karla', sans-serif;
        font-size: .8em;
        font-weight: 700;
        opacity: .6;
        margin-bottom: 30px;
    }
    p{
        font-size: .8em;
        font-weight: 700;
        opacity: .9;
        letter-spacing: .08em;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
`