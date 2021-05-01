import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct, getAllProducts } from '../../store/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  const product = useSelector(state => state.products[id]);

  if (!product) {
    return null;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="productDetailImage">
          <img src={product.imageUrl} alt="Product " />
        </div>
        <div className="productInfo">
          <div>
            <h1 className="productName">{product.name}</h1>
            <p className="productName">{product.description}</p>
          </div>
          <div className="buy">
            <span className="price">{`$${product.price}.00`}</span>
            <button
              className="addToCart"
            >Add to cart</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;