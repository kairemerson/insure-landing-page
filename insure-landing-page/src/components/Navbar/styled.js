import styled from "styled-components";
import colors from "../../colors";

export const WrapperNav = styled.nav`
    display: flex;
    align-items: baseline;
    @media screen and (max-width: 765px){
        Button{
            display: none;
        }
    }
`
export const Hamburger = styled.img`
    display: none;
    @media screen and (max-width: 765px){
        display: block;
    }
`

export const MenuDesktop = styled.ul`
    list-style: none;
    display: flex;
    li{
        margin-right: 20px;
        color: ${colors.darkGrayishViolet};
        cursor: pointer;
    }
    li:hover{
        color: ${colors.veryDarkViolet};
        font-weight: 500;
    }
    @media screen and (max-width: 760px){
        display: none;
        
    } 

`
