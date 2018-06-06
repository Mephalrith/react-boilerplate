import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class HomePage extends Component {

    render() {
        return (
            <div>
                <p>Home Page</p>
            </div>
        );
    }
}

export default withRouter(connect((state) => ({})
)(HomePage))