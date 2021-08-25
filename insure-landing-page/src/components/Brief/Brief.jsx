import React from "react"
import { Section } from "./styled"
import {WButton} from "../Button/styled"
import {Container} from "../../container/Container"
import intro from "../../assets/images/image-intro-desktop.jpg"


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
                <img src={intro} alt="family" />
            </Container>
        </Section>

    )
}

export default Brief