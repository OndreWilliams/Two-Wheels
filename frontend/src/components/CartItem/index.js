import React from 'react';
import { addCartItem, removeCartItem } from "../../store/cart";
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';

function CartItem({product, quantity}){
  const dispatch = useDispatch();

  const onAddQuantity = (product) => {
    dispatch(addCartItem(product));
  };

  const onSubtractQuantity = (product) => {
    dispatch(removeCartItem(product));
  };

  return (
    <div className="cart-item__card">
      <img className="cart-item__image--img" src={product.imageUrl} alt={product.name}/>

      <div className="cart-item__info">
        <p className="cart-item__info--name">{product.name}</p>
      </div>
      <div className="cart-item__pq">
        <p className="cart-item__pq--price">{`$${product.price}.00`}</p>

        <div className="cart-item__pq--quantity-cntnr">
          <button
            className="cart-item__pq--quantity-minus"
            onClick={() => onSubtractQuantity(product)}
          >
            -
          </button>
          <div className="cart-item__pq--quantity-actual">{quantity}</div>
          <button
            className="cart-item__pq--quantity-plus"
            onClick={() => onAddQuantity(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
