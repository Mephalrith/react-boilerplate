import {BUTTONS_ALT_SELECT_BUTTON} from "./button.constants";

export const altSelectButton = (button) => {

    return {
        type: BUTTONS_ALT_SELECT_BUTTON,
        payload: button
    }
};