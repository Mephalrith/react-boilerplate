import ButtonReducer from "../containers/buttons/button.reducer";
import AltButtonReducer from "../containers/buttons.alt/button.reducer";
import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux'

const AllReducers  = combineReducers({
    buttons: ButtonReducer,
    router: routerReducer,
    altButtons: AltButtonReducer
});


export default AllReducers