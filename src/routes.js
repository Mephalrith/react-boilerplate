import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import HomePage from "./pages/home.page";

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path={"/"} component={HomePage} title={"Home"}/>
                        <Route render={() => <div>Not Found</div>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Routes