

import {handleActions} from "redux-actions";
import {LOG_SHIT, SELECT_BUTTON} from "./button.constants";

const initialButtonState = {
    blarg: "kappa",
    buttons: [{name: "one"},{ name: "two"},{name:"three"},{name: "fuzzy"}]
};


const ButtonReducer = handleActions({
    [SELECT_BUTTON] : (state, action) => {


        const newButtons = state.buttons.map((item) => {
           return {
               ...item,
               isSelected : item.name === action.payload.name
           }
        });



        return {
            ...state,
            buttons: newButtons
        };
    },

    [LOG_SHIT] : (state, action) => {

        console.log(state);

        return {
            ...state
        }
    }
}, initialButtonState);



export default ButtonReducer