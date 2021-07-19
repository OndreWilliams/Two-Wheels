import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneProduct, getAllProducts } from '../../store/products';
import { addCartItem } from '../../store/cart';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  const onAddToCart = () => {
    dispatch(addCartItem(product));
    history.push('/cart');
  };

  const product = useSelector(state => state.products[id]);

  if (!product) {
    return null;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="productDetailImage">
          <img className="detailImg" src={product.imageUrl} alt="Product " />
        </div>
        <div className="productInfo">
          <h1 className="productName">{product.name}</h1>
          <p className="productDesc">{product.description}</p>
          <div className="buy">
            <span className="price">{`$${product.price}.00`}</span>
            <button
              className="addToCart"
              onClick={onAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
