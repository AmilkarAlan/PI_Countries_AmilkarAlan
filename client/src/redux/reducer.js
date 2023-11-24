import * as actionsType from './action-type'

const initialState = {
    countries: [],
    activities: [],
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
                activities: [...state.activities, action.payload]
            }

        case actionsType.DELETE_ACTIVITIE:
            return {
                ...state,
                activities: action.payload
            }

        default:
            return state
    }
}

export default reducer