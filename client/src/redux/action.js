import * as actionsTypes from './action-type'
import axios from 'axios'

export const getAllCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/countries/allcountries');
            
            dispatch({
                type: actionsTypes.GET_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            console.error('No fue posible recuperar la información', error);
        }
    };
};