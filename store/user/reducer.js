import {UPDATE_USER} from "../types";

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_USER:
            if (!action.payload){
                return null
            }
            return {...state, ...action.payload}

        default:
            return state
    }
}
