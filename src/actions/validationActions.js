import {
    FORM_VALIDATION,
    FORM_VALIDATION_ERROR,
    FORM_VALIDATION_SUCCESS
    } from '../types';


export function validateFormAction(){
    return (dispatch) =>{
        dispatch(initValidation())
    }
}

export const initValidation = () => {
    return {
        type: FORM_VALIDATION
    }
}

export const validationSuccess = () => {
    return {
        type: FORM_VALIDATION_SUCCESS
    }
}

export const validationError = () => {
    return {
        type: FORM_VALIDATION_ERROR
    }
}