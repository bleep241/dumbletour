import * as types from '../actions/actionTypes.js';

const initialState = {
    registrationIsOpen: false,
    searchBoxIsOpen:  true,
    location: '',
    longitude: 'long',
    latitude: 'lat',
    arrivalDate: '',
    departureDate: '',
    pending: false,
    searchResults: [],
    error: null
}

const dumbletourReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.START_REGISTRATION: {
            const registrationIsOpen = true;
            return {
                ...state,
                registrationIsOpen
            }
        }

        case types.COMPLETE_REGISTRATION: {
            const registrationIsOpen = false;
            return {
                ...state,
                registrationIsOpen
            }
        }
        case types.UPDATE_LOCATION:{
            const location = action.payload;
            return{
                ...state,
                location
            }
        }

        case types.SUBMIT_SEARCH:{
            const searchBoxIsOpen = false;
            const toLog = {
                ...state,
                searchBoxIsOpen
            }
            console.log('Inside reducer')
            console.log(toLog)
            return toLog;
        }

        case types.UPDATE_ARRIVAL_DATE:{
            const arrivalDate = action.payload;
            return{
                ...state,
                arrivalDate
            }
        }

        case types.UPDATE_DEPARTURE_DATE:{
            const departureDate = action.payload;
            return{
                ...state,
                departureDate
            }
        }

        case types.FETCH_SEARCH_PENDING:{
            return{
                ...state,
                pending: true
            }
        }

        case types.FETCH_SEARCH_RESULTS:{
            return{
                ...state,
                pending: false,
                searchResults: action.payload
            }
        }

        case types.FETCH_SEARCH_ERROR:{
            return{
                ...state,
                pending: false,
                error: action.payload
            }
        }

        default:
        return state;
    }
};

export default dumbletourReducer;