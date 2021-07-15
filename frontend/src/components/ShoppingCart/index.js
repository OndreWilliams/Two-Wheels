import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { submitOrder, clearCart } from '../../store/cart';
import CartItem from '../CartItem';
import './ShoppingCart.css';
import '../SignupFormPage/SignupForm.css';

function ShoppingCart(){
  const [errors, setErrors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    getTotalCost(cart, products);
  }, [cart, products]);

  if(!(sessionUser && products))
    return null;

  const getTotalCost = (cart, products) => {
    let sum = 0;
    Object.keys(cart).forEach((id) => {
      if (products[id]) {
        sum += cart[id] * products[id].price;
      }
    });
    setTotalCost(sum);
  };

  const getTotalItems = (cart) =>
    Object.keys(cart).reduce((sum, itemID) => cart[itemID] + sum, 0);

  const handleSubmit = (e) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")

    e.preventDefault();
    dispatch(clearCart());
    history.push('/order')
    // dispatch(submitOrder());

  };

  return (
    <div className="cart__page">
      <div className="cart__cntnr">
        <div className="cart__header">
          <div className="cart__header--label">Cart</div>
          <div className="cart__header--total">{`Total: $${totalCost}.00`}</div>
        </div>
        <div className="cart__main">
          <div className="cart__items">
            {console.log("cart", cart)}
            {Object.entries(cart).map(([key, value]) => {
                return (
                  <CartItem product={products[key]} quantity={value} />
                );
            })}
          </div>
          <div className="cart__checkout">
            <div className="checkout-form__container">
              <form onSubmit={handleSubmit} className="checkout-form">
                <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                  <h2 className="formHeader">Shipping Address</h2>
                </div>
                <div className="formField">
                  <label className="formLabel">
                    Street Address
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="formField">
                  <label className="formLabel">
                    City
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="formField">
                  <label className="formLabel">
                    Country
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="formField">
                  <label className="formLabel">
                    State
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="formField">
                  <label className="formLabel">
                    Zipcode
                    <input
                      type="text"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="submit-order__button--cntnr">
                  {/* <NavLink  exact to={`/order`}> */}
                    <button className="formButton submit-order__button" type="submit">Place Order</button>
                  {/* </NavLink> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
