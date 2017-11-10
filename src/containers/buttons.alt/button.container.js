import React, {Component} from 'react'
import {connect} from "react-redux";
import * as altButtonActions from '../buttons.alt/button.action'
import {push} from "react-router-redux";
import {withRouter} from "react-router-dom";

class AltButtonsContainer extends Component {
    render() {
        return (
            <div>
                Alt Buttons
                {
                    this.props.altButtons.map((item, index) => {
                        return (
                            <button key={index} onClick={() => this.props.altSelectShit(item)}>
                                {item.isSelected ? "mraow" : item.name}
                            </button>
                        )
                    })
                }
                <button onClick={() => this.props.goHome()}>Home</button>
            </div>
        );
    }

}

export default withRouter(connect((state) => ({
        altButtons: state.altButtons.altButtons
    }),
    (dispatch) => ({
        altSelectShit: (button) => dispatch(altButtonActions.altSelectButton(button)),
        goHome: () => dispatch(push("/"))
    })
)(AltButtonsContainer))