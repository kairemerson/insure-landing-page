import styled from "styled-components";
import colors from "../../colors"

export const FooterSection = styled.footer`
    background-color: ${colors.veryLightGray};
    padding-top: 60px;
    position: relative;
    @media screen and (max-width: 765px){
        padding-top: 94px;
    }
`

export const ImgFooter = styled.img`
    position: absolute;
    width: 474px;
    top: 0px;
    @media screen and (max-width: 765px){
        width: 100%;
    }
`

export const HeaderFooter = styled.div`
    display: Flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.grayishBlue};
    padding-bottom: 30px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 765px){
        flex-direction: column;
        gap: 30px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 14px;
`

export const Icon = styled.img`
    width: 22px;
    cursor: pointer;
;
    &:hover{
        filter: invert(51%) sepia(9%) saturate(22%) hue-rotate(357deg) brightness(89%) contrast(79%);
    }    
`    
export const LogoFooter = styled.img`
    width: 110px;

`

export const WrapperContent = styled.div`
    display: flex;
    gap: 180px;
    flex-wrap: wrap;
    @media screen and (max-width: 765px){
        flex-direction: column;
        align-items: center;
        gap: 0px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 40px;
    }
`
