import React, { useState } from "react";
import { Hamburger, MenuDesktop, WrapperNav, ButtonMobile } from "./styled";
import Button from "../Button/Button";
import hamburger from "../../assets/images/icon-hamburger.svg"
import close from "../../assets/images/icon-close.svg"

function Navbar(){
    const [openMenu, setOpenMenu] = useState(false) 
    const handleClick = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }
    
    return(
        <WrapperNav>
            <MenuDesktop className={openMenu ? "mobile" : ""} status={openMenu}>
                <li>HOW WE WORK</li>
                <li>BLOG</li>
                <li>ACCOUNT</li>
                <ButtonMobile>VIEW PLANS</ButtonMobile>
            </MenuDesktop>
            
            <Button>VIEW PLANS</Button>
            {
                openMenu ?
                <Hamburger src={close} alt="hamburger" onClick={handleClick} /> :
                <Hamburger src={hamburger} alt="hamburger" onClick={handleClick} /> 


            }
        </WrapperNav>
    )
}

export default Navbar