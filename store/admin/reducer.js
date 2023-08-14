import {UPDATE_ADMIN} from "../types";

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_ADMIN:
            if (!action.payload){
                return null
            }
            return {...state, ...action.payload}

        default:
            return state
    }
}
