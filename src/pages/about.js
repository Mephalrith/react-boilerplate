import React, {Component} from 'react'
import AltButtonsContainer from '../containers/buttons.alt/button.container'
import {Route, Switch} from "react-router";

class AboutPage extends Component {


    render(){

        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <AltButtonsContainer/>
            </div>


        )
    }
}


export default AboutPage