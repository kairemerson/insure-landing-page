import React from "react"
import { Section, ImageRight, ImageLeft} from "./styled"
import {WButton} from "../Button/styled"
import {Container} from "../../container/Container"
import intro from "../../assets/images/image-intro-desktop.jpg"
import introRight from "../../assets/images/bg-pattern-intro-right-desktop.svg"
import introLeft from "../../assets/images/bg-pattern-intro-left-desktop.svg"


function Brief(){
    return(
        
        <Section>
            <Container>
                <div className='line'></div>
                <div>
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help your find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <WButton>VIEW PLANS</WButton>
                </div>
                <img className="family" src={intro} alt="family" />
                <ImageRight src={introRight}/>
                <ImageLeft src={introLeft}/>
            </Container>
        </Section>

    )
}

export default Brief