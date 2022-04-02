import { combineReducers } from "redux";
import AuthReducer from "../components/authentication/_redux/AuthReducer";

const RootReducer = combineReducers({
    AuthReducer: AuthReducer,
    // counter: CounterReducer,
})

export default RootReducer;