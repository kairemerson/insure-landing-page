import React from 'react';
import logo from '../../assets/images/logo.svg'
import Navbar from '../Navbar/Navbar';
import { Wrapper } from './styled';



function Header(){
    return(
        <Wrapper>
            <img src={logo} alt="logo"/>
            <Navbar/>
        </Wrapper>
    )
}

export default Header