import React, {Component} from 'react'
import {connect} from "react-redux";
import * as buttonActions from './button.action'
import {push} from "react-router-redux";
import {withRouter} from "react-router-dom";

class ButtonContainer extends Component {


    render() {
        return (
            <div>
                I AM THE BUTTON CONTAINER, should be home
                <button onClick={() => this.props.log()} >log shit</button>
                {
                    this.props.buttons.map((item, index) =>{
                        return (
                            <button key={index} onClick={() => this.props.selectShit(item)}>
                                {item.isSelected ? "selected" : item.name}
                                </button>
                        )
                    })
                }
                <button onClick={() => this.props.goAbout()}>About</button>
            </div>
        )
    }
}


export default withRouter(connect((state) => ({
        buttons: state.buttons.buttons
    }),
    (dispatch) => ({
        selectShit: (button) => dispatch(buttonActions.selectButton(button)),
        log: () => dispatch(buttonActions.loggerPro()),
        goAbout: () => dispatch(push("/about"))
    })
)(ButtonContainer))