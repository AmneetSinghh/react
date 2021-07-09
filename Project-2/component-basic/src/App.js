import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';





class App extends Component {
    constructor(props) {
        super(props);
        this.yourname = "Harry Singh";
        this.state = {};
    }



    sayhello(name) {
        return "hello my : " + name;
    }
    render() {
        const name = "jina na na";
        return ( <
            div classNmae = "App" >
            <
            h2 > This is real { this.yourname } < /h2> <
            /div>
        );
    }
}


export default App;