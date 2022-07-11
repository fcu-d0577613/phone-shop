import React,{useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { NavLink, useParams } from 'react-router-dom';


const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  },[])

  const Loading = () => {
    return(
      <h3>Loading......</h3>
    )
  }
  const Showproduct = () => {
    return(
      
      <div className='row'>
        <div className='col-md-6 p-3'>
          <img src={product.image} alt={product.title} width="400px" height="400px"/>
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{product.category}</h4>
          <h1 className='display-5'>{product.title}</h1>
          <p className='lead fw-bolder'> {product.rating && product.rating.rate}  <i className='fa fa-star'></i></p>
          <h3 className='display-6 fw-bold my-4'>{product.price}</h3>
          <p className='lead px-3'>{product.description}</p>
          <button className='btn btn-outline-dark px-4 py-2'
          onClick={() => addProduct(product)}> Add to cart</button>
          <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'> Go to cart</NavLink>
        </div>
      </div>
    )
  }


  return (
    <>
    {loading? <Loading /> : <Showproduct/>}
    </>
  )
}

export default Product