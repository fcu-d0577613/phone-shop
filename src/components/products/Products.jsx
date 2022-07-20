import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "../../style/style.css";


const Products = () => {


  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts  = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }

      return () =>{
        componentMounted = false;
      }
    }

    getProducts();
  },[])



  //loading
  const Loading = () => {
    return(

      <h3>loading......</h3>
    )
  }

  // filterProduct
  const filterProduct = (findWhat) =>{
    const updateDate = data.filter( (x) => x.category == findWhat);
    setFilter(updateDate);
  }
  

  const ShowProducts = () => {
    return(
      <>
        {/* filter button */}
        <div className="buttons d-flex justify-content-center flex-wrap mb-5 pb-5 text-light">
          <button className='btn btn-outline-dark me-2 text-light border-light' 
          onClick={()=>setFilter(data)}>ALL</button>
          <button className='btn btn-outline-dark me-2 text-light border-light' 
          onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='btn btn-outline-dark me-2 text-light border-light' 
          onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='btn btn-outline-dark me-2 text-light border-light'
          onClick={()=>filterProduct("jewelery")}>Jewelery's Clothing</button>
          <button className='btn btn-outline-dark me-2 text-light border-light'
          onClick={()=>filterProduct("electronics")}>Electric </button>
        </div>

        {filter.map((products) => {
          return(
            
              <div className="col-12 col-md-8 col-lg-3 mb-4">
                <div className="card h-100 text-center p-4 "key={products.id} >
                  <img src={products.image} className="card-img-top" alt={products.title} height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{products.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">${products.price}</p>
                    <NavLink to={`/products/${products.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                  </div>
                </div>
              </div>
            
          )
        })}
      </>
    )
  }



  return (
    <div className='mainBG '>
      <div className="container py-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center text-light'>Lastest Products</h1>
              <hr className='text-light border-top-light bg-light' />
            
          </div>
        </div>
        <div className="row justify-content-center ">
          { loading? <Loading />: <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Products