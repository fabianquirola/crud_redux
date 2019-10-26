import React,{useEffect,Fragment, useRef} from 'react';


//redux
import {useDispatch,useSelector} from 'react-redux';
import {getProductUpdateAction,updateProductAction,} from '../actions/productsActions'


const UpdateProduct = ({match}) => {

    //create refs
    const nameRef = useRef('');
    const priceRef = useRef('');


    //dispatch to ejecute primary action
    const dispatch = useDispatch();

    const editProduct = (product)=> dispatch (updateProductAction(product));

    const {id} = match.params

    

    useEffect(()=>{
        dispatch(getProductUpdateAction(id))
    },[dispatch,id]);

    const product = useSelector(state=>state.products.product);
    const error = useSelector(state=>state.products.error);

    if(!product) return 'Cargando...';

    const submitProductUpdate= e =>{
        e.preventDegault();
        // validate form

        // no error

        //save changes

    }

    return ( 

        <Fragment>
            {error 
                ?
                <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div>  
                :
            
       
    
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center">Editar Producto</h2>
                <form
                    onSubmit={submitProductUpdate}
                >
                    <div className="form-group">
                        <label>Titulo</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Titulo"
                            defaultValue={product.name}
                            ref={nameRef}
                        />
                    </div>
                    <div className="form-group">
                        <label>Precio del Producto</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Precio" 
                            defaultValue={product.price}
                            ref={priceRef}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                </form>
                

            </div>
        </div>
    </div>
</div>
            }
     </Fragment>
     );
}
 
export default UpdateProduct;