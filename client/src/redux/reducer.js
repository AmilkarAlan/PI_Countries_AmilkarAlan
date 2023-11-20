import * as actionsType from './action-type'

const initialState = {
    countries: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionsType.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
    
        default:
            return state
    }
}

export default reducer