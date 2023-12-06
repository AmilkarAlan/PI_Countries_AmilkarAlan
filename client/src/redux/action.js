import * as actionsTypes from './action-type'
import axios from 'axios'

export const getAllCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/countries/');

            dispatch({
                type: actionsTypes.GET_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            console.error('No fue posible recuperar la información', error);
        }
    };
};


export const findCountry = (search) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post('http://localhost:3001/countries/country',{name: search});
            dispatch({
                type: actionsTypes.FIND_COUNTRY,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }

}

export const countryDetail = (id) => {
    return async (dispatch) => {
        try {
    
            const {data} = await axios.get(`http://localhost:3001/countries/country/${id}`);
            dispatch({
                type: actionsTypes.DETAILS_COUNTRY,
                payload: data,
            });
            
        } catch (error) {
            console.log(error);
        }
    }

}

export const postActivitie = (activitie) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/countries/activities', activitie);

            dispatch({
                type: actionsTypes.POST_ACTIVITIE,
                payload: data,
            });
        } catch (error) {
            console.error('No fue posible recuperar la información', error);
        }
    };
};
export const delActivitie = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/countries/activities/${id} `);

            dispatch({
                type: actionsTypes.POST_ACTIVITIE,
                payload: data,
            });
        } catch (error) {
            console.error('No fue posible recuperar la información', error);
        }
    };
};