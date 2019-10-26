import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import {useDispatch} from 'react-redux';
import {deleteProductAction} from '../actions/productsActions';


const Product = ({product}) => {

    const dispatch = useDispatch();

    const confirmDeleteProduct = id => {

        //confirm
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              dispatch(deleteProductAction(id));
            }
          })
        
    }

    return ( 
        <tr>
            <td>{product.name}</td>
            <td><span className="font-weight-bold">{product.price}</span></td>
            <td className="acciones">
                <Link to={`/products/update/${product.id}`}
                className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button 

                className="btn btn-danger"
                onClick={()=>confirmDeleteProduct(product.id)}>
                    Eliminar
                </button>

            </td>
        </tr>
     );
}
 
export default Product;