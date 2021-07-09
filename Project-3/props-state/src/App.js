import logo from './logo.svg';
import react, { Component } from 'react';
import './App.css';
// we are learning props nd states;

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        /header> <
        Parent / >
        <
        /div>
    );
}



class Parent extends Component {
    render() {
        return ( <
            div >
            <
            h2 > Just some info
            for harry: < /h2> <
            Cars msg = "Cars are cool <- this is message"
            model = "12345"
            coolcars = { this.props.cars }
            /> <
            /div>
        );
    }
}


Parent.defaultProps = {
    // this is passing from parent to child/
    cars: ['bmw', 'mercedes', 'auto', 'train', 'oddy', 'audi']

}


class Cars extends Component {
    render() {
        console.log(this.props)
        return ( <
            div >
            <
            h3 > I am from cars component: < /h3> <
            h2 > < /h2> <
            p > { this.props.msg } < /p> <
            p > { this.props.model } < /p> <
            p > {
                this.props.coolcars.map((item, i) => {
                    return i + "-> " + item;
                })
            } < /p> <
            /div>
        );
    }
}



export default App;