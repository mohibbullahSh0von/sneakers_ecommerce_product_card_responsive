import { useState, useEffect } from 'react';
import prevIcon from '../../assets/images/icon-previous.svg';
import nxtIcon from '../../assets/images/icon-next.svg';
import closeIcon from '../../assets/images/icon-close.svg';

function LightboxGallery({ productImages = [], productThumbnails = [] }) {
  console.log(productImages);
  console.log(productThumbnails);

  const [renderImage, setRenderImage] = useState(productImages[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [isZoomGallery, setIsZoomGallery] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsZoomGallery(false);
      }
    };
    if (isZoomGallery) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomGallery]);

  return (
    <div className="wrapper lightbox-gallery">
      <div
        className="mobile:rounded-2xl relative overflow-hidden"
        onClick={() => {
          setIsZoomGallery(!isZoomGallery);
        }}
      >
        <img src={renderImage} alt="product-image" />
        <button
          className="mobile:hidden bg-theme-light-grayish-blue absolute top-[50%] left-4 translate-y-[-50%] transform cursor-pointer rounded-full py-3 pr-4 pl-3 transition-all duration-200 ease-in-out active:scale-90"
          onClick={(e) => {
            e.stopPropagation();
            if (productImages.indexOf(renderImage) === 0) {
              setRenderImage(() => productImages[productImages.length - 1]);
              setActiveThumbnail(() => productImages.length - 1);
              return;
            }
            setRenderImage(
              (prev) => productImages[productImages.indexOf(prev) - 1]
            );
            setActiveThumbnail(() => productImages.indexOf(renderImage) - 1);
          }}
        >
          <img src={prevIcon} alt="previous-icon" />
        </button>
        <button
          className="mobile:hidden bg-theme-light-grayish-blue absolute top-[50%] right-4 translate-y-[-50%] transform cursor-pointer rounded-full py-3 pr-3 pl-4 transition-all duration-200 ease-in-out active:scale-90"
          onClick={(e) => {
            e.stopPropagation();
            if (
              productImages.indexOf(renderImage) ===
              productImages.length - 1
            ) {
              setRenderImage(() => productImages[0]);
              setActiveThumbnail(() => 0);
              return;
            }
            setRenderImage(
              (prev) => productImages[productImages.indexOf(prev) + 1]
            );
            setActiveThumbnail(productImages.indexOf(renderImage) + 1);
          }}
        >
          <img src={nxtIcon} alt="next-icon" />
        </button>
      </div>
      <ul className="mobile:flex mt-8 hidden flex-row items-center justify-between">
        {productThumbnails.map((thumbnail) => (
          <li
            key={productThumbnails.indexOf(thumbnail)}
            className={`w-20 overflow-hidden rounded-2xl ${activeThumbnail === productThumbnails.indexOf(thumbnail) ? 'border-theme-orange border-2 opacity-55' : ''}`}
            onClick={() => {
              setActiveThumbnail(() => productThumbnails.indexOf(thumbnail));
              setRenderImage(
                productImages[productThumbnails.indexOf(thumbnail)]
              );
            }}
          >
            <img src={thumbnail} alt="thumbnail" />
          </li>
        ))}
      </ul>

      {/* gallery overlay while zoomed in desktop */}

      <div className="wrapper mobile:block hidden">
        {isZoomGallery && (
          <div className="wrapper gallery-overlay bg-theme-black-75opac z-overlay fixed top-0 right-0 bottom-0 left-0">
            <div className="lightbox-gallery-container mr-auto ml-auto max-w-[1025px]">
              <div className="wrapper mt-28 mr-auto ml-auto w-[50%]">
                <div
                  className="mobile:rounded-2xl relative"
                  onClick={() => {
                    setIsZoomGallery(!isZoomGallery);
                  }}
                >
                  <button
                    className="z-overlay absolute -top-4 -right-4 translate-x-full -translate-y-full"
                    onClick={() => setIsZoomGallery(!isZoomGallery)}
                  >
                    <img className="w-6" src={closeIcon} alt="close-icon" />
                  </button>
                  <img
                    className="overflow-hidden rounded-2xl"
                    src={renderImage}
                    alt="product-image"
                  />
                  <button
                    className="bg-theme-light-grayish-blue absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] transform cursor-pointer rounded-full py-3 pr-4 pl-3 transition-all duration-200 ease-in-out active:scale-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (productImages.indexOf(renderImage) === 0) {
                        setRenderImage(
                          () => productImages[productImages.length - 1]
                        );
                        setActiveThumbnail(() => productImages.length - 1);
                        return;
                      }
                      setRenderImage(
                        (prev) => productImages[productImages.indexOf(prev) - 1]
                      );
                      setActiveThumbnail(
                        () => productImages.indexOf(renderImage) - 1
                      );
                    }}
                  >
                    <img src={prevIcon} alt="previous-icon" />
                  </button>
                  <button
                    className="bg-theme-light-grayish-blue absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] transform cursor-pointer rounded-full py-3 pr-3 pl-4 transition-all duration-200 ease-in-out active:scale-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (
                        productImages.indexOf(renderImage) ===
                        productImages.length - 1
                      ) {
                        setRenderImage(() => productImages[0]);
                        setActiveThumbnail(() => 0);
                        return;
                      }
                      setRenderImage(
                        (prev) => productImages[productImages.indexOf(prev) + 1]
                      );
                      setActiveThumbnail(
                        productImages.indexOf(renderImage) + 1
                      );
                    }}
                  >
                    <img src={nxtIcon} alt="next-icon" />
                  </button>
                </div>
                <ul className="mobile:flex mt-8 hidden flex-row items-center justify-between">
                  {productThumbnails.map((thumbnail) => (
                    <li
                      key={productThumbnails.indexOf(thumbnail)}
                      className={`w-20 overflow-hidden rounded-2xl ${activeThumbnail === productThumbnails.indexOf(thumbnail) ? 'border-theme-orange border-2 opacity-100' : 'opacity-55'}`}
                      onClick={() => {
                        setActiveThumbnail(() =>
                          productThumbnails.indexOf(thumbnail)
                        );
                        setRenderImage(
                          productImages[productThumbnails.indexOf(thumbnail)]
                        );
                      }}
                    >
                      <img src={thumbnail} alt="thumbnail" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LightboxGallery;
