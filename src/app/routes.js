import React, {Component} from 'react'
import {Provider} from "react-redux";
import store from "./store";
import HomePage from "../pages/homepage";
import {ConnectedRouter} from "react-router-redux";
import createHistory from 'history/createBrowserHistory'
import {Route, Switch} from "react-router";
import AboutPage from "../pages/about";


const history = createHistory();

class Routes extends Component {

    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <Switch>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route path={"/about"} component={AboutPage}/>
                        <Route path={"/"} render={() => <div>Not found</div>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>

        )
    }
}


export default Routes