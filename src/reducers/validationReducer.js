 import {
 FORM_VALIDATION,
 FORM_VALIDATION_ERROR,
 FORM_VALIDATION_SUCCESS
 } from '../types';

 //initial store
 const initialState = {
     error: null
 }

 export default function(state = initialState,action){
     switch(action.type){
         case FORM_VALIDATION:
             return{
                 ...state,
                 error: null
             }
        case FORM_VALIDATION_SUCCESS:
            return{
                ...state,
                error: null
            }
        case FORM_VALIDATION_ERROR:
            return{
                ...state,
                error: true
            }
        default:
            return state
     }
 }