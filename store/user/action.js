import {UPDATE_USER} from "../types";

export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}



