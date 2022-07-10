import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { delItem} from "../redux/action/index";

const Cart = () => {
  const state = useSelector( (state) => state.addItem);
  const dispatch = useDispatch();

  const cartItem = (cartItem) => {
    return(
      <div className='px-4'>
        <div className='container'>
          <button className='btn '>
            <div className='row'>
              <div className='col-md-4'>
                <h3></h3>
                <p></p>
              </div>
            </div>
          </button>
        </div>  
      </div>
    )
  }
  return (
    <div>
      {/* {state.length !==0 && state.map(cartItem)} */}
    </div>
  )
}

export default Cart