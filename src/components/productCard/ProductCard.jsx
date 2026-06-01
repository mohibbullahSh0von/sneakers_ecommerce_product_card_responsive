import { useState } from 'react';
import { useDispatch } from 'react-redux';
import minusIcon from '../../assets/images/icon-minus.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import { addProduct } from '../../context/cartSlice';
import { LightboxGallery } from '../../index';

import productImg1 from '../../assets/images/image-product-1.jpg';
import productImg1Thumb from '../../assets/images/image-product-1-thumbnail.jpg';
import productImg2 from '../../assets/images/image-product-2.jpg';
import productImg2Thumb from '../../assets/images/image-product-2-thumbnail.jpg';
import productImg3 from '../../assets/images/image-product-3.jpg';
import productImg3Thumb from '../../assets/images/image-product-3-thumbnail.jpg';
import productImg4 from '../../assets/images/image-product-4.jpg';
import productImg4Thumb from '../../assets/images/image-product-4-thumbnail.jpg';

console.log(productImg1);
console.log(productImg1Thumb);

function ProductCard({
  id = 1,
  productThumbnail,
  companyName,
  productName,
  productDesc,
  price = 250,
  discount = 50,
  stock = 10,
}) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const productImages = [productImg1, productImg2, productImg3, productImg4];
  const productThumbnails = [
    productImg1Thumb,
    productImg2Thumb,
    productImg3Thumb,
    productImg4Thumb,
  ];

  const handleAddBtnClick = () => {
    if (count === 0) return;
    dispatch(
      addProduct({
        id: id,
        productThumbnail: productThumbnail,
        productName: productName,
        discountedPrice: Math.ceil((price * discount) / 100),
        productAmount: count,
      })
    );
  };

  return (
    <div className="mobile:w-[90%] mobile:ml-auto mobile:mr-auto product-card mobile:flex-row flex max-w-[1025px] flex-col items-center justify-center gap-10">
      <div>
        <LightboxGallery
          productImages={productImages}
          productThumbnails={productThumbnails}
        />
      </div>
      <div className="wrapper flex flex-col gap-6 px-8 py-4">
        <div className="text-wrapper">
          <h3 className="text-theme-dark-grayish-blue text-xs font-bold tracking-widest uppercase">
            {companyName}
          </h3>
          <h2 className="mt-2 text-3xl font-bold capitalize">{productName}</h2>
          <p className="text-theme-dark-grayish-blue mt-4">{productDesc}</p>
          <div className="prizing-section mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-4 mt-6 flex flex-row items-center justify-between font-bold">
            <div className="wrapper flex w-full flex-row items-center justify-start gap-4">
              <span className="inline-block text-2xl">
                ${Math.ceil((price * discount) / 100)}.00
              </span>
              <span className="inline-block rounded-lg bg-black px-2 py-1 text-sm text-white">
                {discount}%
              </span>
            </div>
            <div className="text-theme-dark-grayish-blue grow text-end line-through">
              ${price}.00
            </div>
          </div>
        </div>
        <div className="input-wrapper mobile:flex-row flex flex-col gap-4">
          <div className="wrapper bg-theme-light-grayish-blue mobile:w-auto flex w-full flex-row items-center justify-between rounded-xl">
            <button
              className="flex min-w-10 cursor-pointer flex-row items-center justify-center"
              onClick={() => {
                if (count === 0) return;
                setCount((prev) => prev - 1);
              }}
            >
              <img src={minusIcon} alt="minus icon" />
            </button>
            <input
              className="max-w-16 shrink py-4 text-center font-bold"
              type="number"
              value={count}
              readOnly
            />
            <button
              className="flex min-w-10 cursor-pointer flex-row items-center justify-center"
              onClick={() => {
                if (count === stock) return;
                setCount((prev) => prev + 1);
              }}
            >
              <img src={plusIcon} alt="plus icon" />
            </button>
          </div>
          <button
            className={`bg-theme-orange flex w-full cursor-pointer flex-row items-center justify-center gap-4 rounded-xl py-4 font-bold ${count ? 'active:scale-90' : ''} transform transition-all duration-200 ease-in-out ${count ? '' : 'opacity-50'}`}
            disabled={count ? false : true}
            onClick={() => handleAddBtnClick()}
          >
            <img src={cartIcon} alt="cart-icon" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
