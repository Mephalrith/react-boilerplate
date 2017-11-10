import {LOG_SHIT, SELECT_BUTTON} from "./button.constants";

export const selectButton = (button) => {

    return {
        type: SELECT_BUTTON,
        payload: button
    }
};


export const loggerPro = () => {
    return {
        type: LOG_SHIT
    }
};
