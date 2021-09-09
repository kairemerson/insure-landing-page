import React from "react"
import { FooterSection, HeaderFooter, Icon, ImgFooter, LogoFooter, SocialIcons, WrapperContent } from "./styled"
import {Container} from "../../container/Container"
import logo from "../../assets/images/logo.svg"
import face from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import insta from "../../assets/images/icon-instagram.svg"
import bgFooter from "../../assets/images/bg-pattern-footer-desktop.svg"
import bgFooterMobile from "../../assets/images/bg-pattern-footer-mobile.svg"
import FooterContent from "../FooterContent/FooterContent"


function Footer(){
    return(
        <FooterSection>
            <ImgFooter src={window.screen.availWidth > 765 ? bgFooter : bgFooterMobile}/>
            <Container>
                <HeaderFooter>
                    <LogoFooter src={logo}/>
                    <SocialIcons>
                        <Icon src={face}/>
                        <Icon src={twitter}/>
                        <Icon src={pinterest}/>
                        <Icon src={insta}/>
                    </SocialIcons>
                </HeaderFooter>
                <WrapperContent>
                    <FooterContent title="OUR COMPANY" paragraphs={['HOW WE WORK', 'WHY INSURE?', 'VIEW PLANS', 'REVIEWS']}></FooterContent>
                    <FooterContent title="HELP ME" paragraphs={['FAQ', 'TERMS OF USE', 'PRIVACY POLICY', 'COOKIES']}></FooterContent>
                    <FooterContent title="CONTACT" paragraphs={['SALES', 'SUPPORT', 'LIVE CHAT']}></FooterContent>
                    <FooterContent title="OTHERS" paragraphs={['CAREERS', 'PRESS', 'LICENSES']}></FooterContent>
                </WrapperContent>
            </Container>
        </FooterSection>
    )
}

export default Footer