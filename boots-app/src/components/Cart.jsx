import React from 'react';
import {connect} from 'react-redux';
import { addToCart , removeFromCart , increaseQuantity , decreaseQuantity } from '../actions/CartAction';


const Cart = ({boots , addToCart , removeFromCart , increaseQuantity , decreaseQuantity}) => {
    return(
        <div>
            <h2> Available Boots </h2>
            <ul>
                {boots.map((boot) => (
                    <li key={boot.id}>
                        {boots.name} - Size : {boots.size} , color : {boots.color}
                        <button onClick={() => addToCart(boot.id)}> Add to Cart </button>
                        <button onClick={() => removeFromCart(boot.id)}> Remove from cart </button>
                        <button onClick={() => increaseQuantity(boot.id)}> + </button>
                        <button onClick={() => decreaseQuantity(boot.id)}> - </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => ({
    boots : state.cart.boots,
});


const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps , mapDispatchToProps)(Cart);