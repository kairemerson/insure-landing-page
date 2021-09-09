import styled from "styled-components"
import colors from "../../colors"


export const Section = styled.section`
    background-color: ${colors.darkViolet};
    color: white;
    padding-top: 8%;
    padding-bottom: 8%;
    position: relative;
    div.line{
        width: 16%;
        border-top: 1px solid ${colors.veryLightGray};
        opacity: .7;
        margin-bottom: 60px;
    }
    div{
        width: 74%;
    }
    img.family{
        position: absolute;
        top: 100px;
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
    @media screen and (max-width: 765px){
        div.line{
            display: none;
        }
        div{
            width: 100%;
            text-align: center;
            padding: 0 2%;
            h1{
                font-size: 2.7em;
                width: 92%;
                margin: 0 auto;
                margin-top: 470px;
            }
            p{
                max-width: 316px;
                margin: 30px auto;
            }
            button{
                margin-bottom: 50px;
            }
        }
        img.family{
            position: absolute;
            width: 100%;
            top: -30px;
            left: 0px;
        }
    }
`
export const ImageRight = styled.img`
    position: absolute;
    width: 30%;
    top: -80px;
    right: 0;
    z-index: 1;
    @media screen and (max-width: 765px){
        width: 34%;
        top: 730px;
    }
`
export const ImageLeft = styled.img`
    position: absolute;
    left: 0;
    top: calc(710px - 50%);
    width: 12%;
    @media screen and (max-width: 765px){
        width: 30%;
        top: 420px;
    }
`
