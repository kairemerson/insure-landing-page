import React from "react"
import { Line, Section, Title, WrapperDif } from "./styled"
import { Container } from "../../container/Container"
import Info from "../Info/Info"

import snappy from "../../assets/images/icon-snappy-process.svg"
import prices from "../../assets/images/icon-affordable-prices.svg"
import people from "../../assets/images/icon-people-first.svg"

function Different(){
    return(
        <Section>
            <Container>
                <Line/>
                <Title>We're different</Title>
                <WrapperDif>
                    <Info image={snappy}
                    title="Snappy Process" 
                    paragraph="Our aplication process can be completed in minutes, not hours. Don't get stuck filling in tedius forms."/>
                    
                    <Info image={prices}
                    title="Affordable Prices" 
                    paragraph="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."/>
                    
                    <Info image={people}
                    title="People First" 
                    paragraph="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."/>

                </WrapperDif>
            </Container>
        </Section>
    )
}

export default Different