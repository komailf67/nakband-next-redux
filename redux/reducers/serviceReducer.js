import { NEW_SERVICE, SERVICES } from "../../pages/partials/consts/actionsConstants";

const initialState = {
    // services: {
    //     newServices:{success: 'd', message: ''}
    // }
}

export const serviceReducer = (state = initialState, action) => {
    console.log('saleReducer', action);

    switch (action.type) {

        case SERVICES:
            return {
                ...state,
                services: action.services.data
            }
        case NEW_SERVICE:
            console.log('state', state);
            
            return {
                ...state,
                newService: action.newService
            }
        default:
            return state

    }
}