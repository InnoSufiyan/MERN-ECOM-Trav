import { ActionTypes } from "../constants/action-types"

const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_REQUEST:
            return {
                
            }
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {

            }
        case ActionTypes.USER_LOGIN_FAIL:
            return {

            }
    }
}