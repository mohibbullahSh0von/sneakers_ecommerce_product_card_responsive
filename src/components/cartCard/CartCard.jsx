import { removeProduct } from '../../context/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from '../../assets/images/icon-delete.svg';
import { useNavigate } from 'react-router-dom';

function CartCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="cart-card">
      <h2 className="border-theme-grayish-blue border-b px-8 py-6 font-bold">
        Cart
      </h2>
      {cartState.length > 0 ? (
        cartState.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-start justify-start gap-6 p-4"
          >
            <div className="wrapper text-theme-dark-grayish-blue flex w-full flex-row items-center justify-between gap-4">
              <div className="w-16 overflow-hidden rounded-lg">
                <img src={product.productThumbnail} alt="thumbnail" />
              </div>

              <div className="wrapper flex grow flex-col">
                <h3 className="capitalize">{product.productName}</h3>
                <div className="wrapper flex flex-row gap-2">
                  <div className="price-quantity">
                    ${product.discountedPrice} x {product.productAmount}
                  </div>
                  <div className="total-price font-bold">
                    ${product.discountedPrice * product.productAmount}
                  </div>
                </div>
              </div>

              <button
                className="delete-btn cursor-pointer"
                onClick={() => {
                  dispatch(removeProduct({ id: product.id }));
                  console.log(product);
                }}
              >
                <img src={deleteIcon} alt="delete-icon" />
              </button>
            </div>
            <button
              className="bg-theme-orange w-full transform cursor-pointer rounded-lg py-4 font-bold capitalize transition-all duration-200 ease-in-out active:scale-90"
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </button>
          </div>
        ))
      ) : (
        <div className="text-theme-grayish-blue w-[300px] py-8 text-center capitalize">
          empty
        </div>
      )}
    </div>
  );
}

export default CartCard;
