import React from "react";
import { Hamburger, MenuDesktop, WrapperNav } from "./styled";
import Button from "../Button/Button";
import hamburger from "../../assets/images/icon-hamburger.svg"

function Navbar(){
    return(
        <WrapperNav>
            <MenuDesktop>
                <li>HOW WE WORK</li>
                <li>BLOG</li>
                <li>ACCOUNT</li>
            </MenuDesktop>
            <Button>VIEW PLANS</Button>
            <Hamburger src={hamburger} alt="hamburger" />
        </WrapperNav>
    )
}

export default Navbar