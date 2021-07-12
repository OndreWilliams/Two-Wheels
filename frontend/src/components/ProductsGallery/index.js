
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getAllProducts } from '../../store/products';

import './ProductsGallery.css';

const ProductsGallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(state => {
    return state.products.list;
  });

  const [searchTerm, setSearchTerm] = useState("");

  if (!products) {
    return null;
  }

  return (
    <div className="productsPage">
      <div className="searchContainer">
        <form className="productsSearch" >
        <input
        type="search"
        name="searchField"
        className="searchBox"
        autocomplete="off"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        >
        </input>
      </form>
      </div>

      <nav className="productsContainer">
        {products.filter(product =>
          product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
          .map((product) => {

          return (
            <NavLink className="productLink" key={product.name} exact to={`/products/${product.id}`}>
              <div className="productCard">
                <div className="productImage">
                  <img clasName="productImg" src={product.imageUrl} alt="Product" />
                </div>
                <div className="cardHeader">
                  <p className="productTitle">{product.name}</p>
                  <p className="price">{`$${product.price}.00`}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default ProductsGallery;
