import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR, 
    BEGIN_LOADING_PRODUCTS,
    LOADING_PRODUCTS_SUCCESS,
    LOADING_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_UPDATE,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_ERROR,
    BEGIN_PRODUCT_UPDATED,
    PRODUCT_UPDATED_SUCCESS,
    PRODUCT_UPDATED_ERROR
} from '../types';
import { taggedTemplateExpression } from '@babel/types';

//each reducer have it own state

const initialState = {
    products:[],
    error:null,
    loading:false,
    product:{}
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                error:null,
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                error:null,
                products: [...state.products,action.payload]
            }
        case ADD_PRODUCT_ERROR:
            return{
                ...state,
                error:action.payload,
            }
        case BEGIN_LOADING_PRODUCTS:
            return{
                ...state,
                error:action.payload,
                loading:true,
                product: {}
            }
        case LOADING_PRODUCTS_SUCCESS:
            return{
                ...state,
                products:action.payload,
                loading:false,
                error: false

            }
        case LOADING_PRODUCTS_ERROR:
            return{
                ...state,
                products:[],
                error:true,
                loading:false,
                product: {}
            }
        case GET_DELETE_PRODUCT:
                return{
                    ...state,
                    error:null,
                }
        case DELETE_PRODUCT_SUCCESS:
                return{
                    ...state,
                    error:null,
                    products: state.products.filter(product =>product.id !== action.payload )
                }
        case DELETE_PRODUCT_ERROR:
                return{
                    ...state,
                    error:true,
                }
        case GET_PRODUCT_UPDATE:
                return{
                    ...state,
                    error:false,

                }

        case PRODUCT_UPDATE_SUCCESS:
                return{
                    ...state,
                    error:null,
                    product: action.payload
                }

        case PRODUCT_UPDATE_ERROR:
                return{
                    ...state,
                    error:null,
                }
        case BEGIN_PRODUCT_UPDATED:
                return{
                    ...state,
                    error:null,
                }
        case PRODUCT_UPDATED_SUCCESS:
                return{
                    ...state,
                    error:null,
                    products: state.products.map(product=> product.id === action.payload.id ? product = action.payload : product)
                }
        case PRODUCT_UPDATED_ERROR:
                return{
                    ...state,
                    error:true,
                }
        default:
            return state;
}
}