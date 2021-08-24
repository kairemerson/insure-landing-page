import React from "react";
import { WrapperNav } from "./styled";
import Button from "../Button/Button";

function Navbar(){
    return(
        <WrapperNav>
            <ul>
                <li>HOW WE WORK</li>
                <li>BLOG</li>
                <li>ACCOUNT</li>
            </ul>
            <Button>VIEW PLANS</Button>
        </WrapperNav>
    )
}

export default Navbar