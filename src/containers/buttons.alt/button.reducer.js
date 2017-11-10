import {handleActions} from "redux-actions";
import {BUTTONS_ALT_SELECT_BUTTON} from "../buttons.alt/button.constants";

const initialAltButtonState = {
    altButtons: [{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]
};

const AltButtonReducer = handleActions({
    [BUTTONS_ALT_SELECT_BUTTON]: (state, action) => {
        const newButtons = state.altButtons.map((item) => {
            return {
                ...item,
                isSelected: item.name === action.payload.name
            }
        });
        return {
            ...state,
            altButtons: newButtons
        };
    }
}, initialAltButtonState);

export default AltButtonReducer