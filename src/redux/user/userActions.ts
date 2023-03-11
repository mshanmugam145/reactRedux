import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users    
    }
}

export const fetchUserFailure = (err: string) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err,
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchUserFailure(errMsg))
        })
    }
}