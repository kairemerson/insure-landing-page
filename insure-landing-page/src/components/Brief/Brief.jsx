import React from "react"
import { Section, ImageRight, ImageLeft} from "./styled"
import {WButton} from "../Button/styled"
import {Container} from "../../container/Container"
import intro from "../../assets/images/image-intro-desktop.jpg"
import introRight from "../../assets/images/bg-pattern-intro-right-desktop.svg"
import introLeft from "../../assets/images/bg-pattern-intro-left-desktop.svg"
import introMobile from "../../assets/images/bg-pattern-intro-right-mobile.svg"
import introMobileLeft from "../../assets/images/bg-pattern-intro-left-mobile.svg"


function Brief(){
    console.log(window.screen.availWidth);
    return(
        
        <Section>
            <Container>
                <div className='line'></div>
                <img className="family" src={intro} alt="family" />
                <div>
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help your find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <WButton>VIEW PLANS</WButton>
                </div>
                <ImageRight src={ window.screen.availWidth > 765 ? introRight : introMobile}/>
                <ImageLeft src={window.screen.availWidth > 765 ? introLeft: introMobileLeft}/>
            </Container>
        </Section>

    )
}

export default Brief