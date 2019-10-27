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

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';
//Create new product - primary function

export function createNewProductAction(product){
    return (dispatch)=>{
        dispatch(newProduct());

        axiosClient.post('/books',product)
        .then(response =>{
            console.log(response);
            dispatch(addProductSuccess(product))
            Swal.fire(
                'Saved',
                'Product stored correctly',
                'success',
            );
        })
        .catch(error => {
            console.log(error);
            dispatch(addProductError(error))
        })
       
    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
})

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
})


export function getProductsAction () {
    return (dispatch) =>{
        dispatch(getProductsBegin());
        axiosClient.get('/books')
        .then(response =>{
            dispatch(loadingProductsSuccess(response.data));

        }).catch(error=>{
            console.log(error);
            dispatch(loadingProductsError());
        })
    }
}

export const getProductsBegin = () => ({
    type: BEGIN_LOADING_PRODUCTS
})

export const loadingProductsSuccess = products => ({
    type: LOADING_PRODUCTS_SUCCESS,
    payload: products
})

export const loadingProductsError = () => ({
    type: LOADING_PRODUCTS_ERROR,
    
})

export const deleteProductAction = (id) => {
    return(dispatch) =>{
        dispatch(getDeleteProduct());

        //delete from api

        axiosClient.delete(`/books/${id}`)
        .then(response =>{
            console.log()
            dispatch(deleteProductSuccess(id));

        })
        .catch(error =>{
            deleteProductError();
        })
    }
    
}

export const getDeleteProduct = () => ({
    
    type: GET_DELETE_PRODUCT,
    
})

export const deleteProductSuccess = (id) => ({
    
    type: DELETE_PRODUCT_SUCCESS,
    payload:id
})

export const deleteProductError = () => ({
    
    type: DELETE_PRODUCT_ERROR,

})

export function getProductUpdateAction (id) {
    return(dispatch)=>{
        dispatch(getProductAction());

        axiosClient.get(`/books/${id}`)
        .then(response =>{
            dispatch(updateProductSuccess(response.data))

        })
        .catch(error=>{
            dispatch(updateProductError());
        })
    }
}

export const getProductAction = ()=>({
    type: GET_PRODUCT_UPDATE
})

export const updateProductSuccess = product=>({
    type: PRODUCT_UPDATE_SUCCESS,
    payload: product
})

export const updateProductError = ()=>({
    type: PRODUCT_UPDATE_ERROR,
})

//Modify items on api and state

export function updateProductAction(product){
 return (dispatch)=>{
     dispatch(beginProductUpdated());

     //consult api
     axiosClient.put(`/books/${product.id}`,product)
        .then(response =>{
            console.log(response);
            dispatch(updatedProductSuccess(response.data));
            
        })
        .catch(error=>{
            console.log(error); 
            dispatch(updatedProductError());
        })
 }
}

export const beginProductUpdated = ()=>({
    type: BEGIN_PRODUCT_UPDATED,
})

export const updatedProductSuccess = product =>({
    type: PRODUCT_UPDATED_SUCCESS,
    payload: product
})

export const updatedProductError = () =>({
    type: PRODUCT_UPDATED_ERROR,
})