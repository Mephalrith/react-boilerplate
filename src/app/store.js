import AllReducers from "./reducer";
import {createStore} from "redux";


const store  = createStore(AllReducers);

export default store


