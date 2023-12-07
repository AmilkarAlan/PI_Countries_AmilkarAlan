import * as actionsType from './action-type'

const initialState = {
    countries: [],
    activities: [],
    findCountry: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionsType.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case actionsType.POST_ACTIVITIE:
            return {
                ...state,
                activities: [ ...state.activities, action.payload ]
            }

        case actionsType.DELETE_ACTIVITIE:
            return {
                ...state,
                activities: action.payload
            }
        case actionsType.FIND_COUNTRY:
            
            return {
                ...state,
                findCountry: action.payload,
            }
        default:
            return state
    }
}

export default reducer