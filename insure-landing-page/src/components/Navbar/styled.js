import styled from "styled-components";
import colors from "../../colors";
import image from "../../assets/images/bg-pattern-mobile-nav.svg"

export const WrapperNav = styled.nav`
    display: flex;
    align-items: baseline;
        
    @media screen and (max-width: 765px){
        & > button{
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
    transition: 1s;
        &.mobile{
            display: block;
            position: absolute;
            transform: ${props => {
                if(props.status){
                    return "translateY(36px)"
                } 
                }};
            left: 0;
            right: 0;
            height: 89vh;
            background-color: ${colors.veryDarkViolet};
            padding: 50px 20px;
                        
        }
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
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        height: 89vh;
        padding: 50px 20px;
        transform: translateY(-700px);
        background-color: ${colors.veryDarkViolet};
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: 0 100%;
        li{
            font-size: 1.6em;
            text-align: center;
            color: #ddd;
            font-weight: 400;
            margin-right: 0;
            margin-bottom: 40px;
            &:hover{
                color: #ddd;
            }
        }
    } 

`

export const ButtonMobile = styled.button`
    display: none;
    @media screen and (max-width: 765px){
        display: block;
        background: transparent;
        color: white;
        padding: 10px 120px;
        border: 1px solid white;
        margin: 0 auto;
        &:hover{
            background-color: white;
            color: ${colors.veryDarkViolet};
        }
    }
`




