
import {ProductCard} from '../../index';
import productThumbnail from '../../assets/images/image-product-1-thumbnail.jpg';

function Collection() {
  return (
    <div>
      <ProductCard companyName="sneaker company"
                   productThumbnail={productThumbnail} 
                   productName="fall limited edition sneakers"
                   productDesc="These low-profile sneakers are your perfect casual wear companion. Fearuring a durable rubber outer sole, they'll withstand everything the weather can offer."
                   />
                   
    </div>
  )
}

export default Collection