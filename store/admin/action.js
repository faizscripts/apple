import {UPDATE_ADMIN} from "../types";

export const updateAdmin = (data) => {
    return {
        type: UPDATE_ADMIN,
        payload: data
    }
}



