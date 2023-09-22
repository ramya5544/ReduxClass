import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../Features/cartSlice';

const CartPage = () => {
    const dispatch=useDispatch();
    return (
        <div>
          <h1>cart page</h1>  
          <button onClick={()=>dispatch(ADD())}>ADD</button>
          <button onClick={()=>dispatch(SUB())}>SUB</button>
        </div>
    );
};

export default CartPage;