import React from "react"
import { Container } from "../../container/Container"
import imgCall from "../../assets/images/bg-pattern-how-we-work-desktop.svg"
import imgCallMobile from "../../assets/images/bg-pattern-how-we-work-mobile.svg"
import { SectionCall, TitleCall, CallButton, ImageCall } from "./styled"

function CallToAction (){
    return(
        <Container>
            <SectionCall>
            <ImageCall src={window.screen.availWidth > 765 ? imgCall : imgCallMobile}/>
                <TitleCall>Find out more about how we work</TitleCall>
                <CallButton>HOW WE WORK</CallButton>
            </SectionCall>
        </Container>
    )
}

export default CallToAction