import React, { Component } from 'react';
import logo from './logo.svg';



function Header() {
    return ( <
        div >
        <
        div className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        h2 > Welcome back < /h2> <
        /div> <
        /div>
    );
}

export default Header;