import Products from "../Products/Products";
import Header from "../Header/Header";
import { useRef, useState, useEffect } from "react";

export default function Left() {
  const products = [
    {
      name: "Blue Topaz Bracelet",
      imgSrc: "/blue-topaz-bracelet.png",
    },
    {
      name: "Amethyst Ring",
      imgSrc: "/amethyst-ring.png",
    },
    {
      name: "Peridot Set",
      imgSrc: "/peridot-set.png",
    },
    {
      name: "Smoky Quartz Earrings",
      imgSrc: "/smoky-quartz-earrings.png",
    },
    {
      name: "Tanzanite Earrings",
      imgSrc: "/tanzanite-earrings.png",
    },
  ];

  const elementRef = useRef(null);
  const productRef = useRef(null);

  const [arrowDisable, setArrowDisable] = useState(true);
  const [productWidth, setProductWidth] = useState(0);

  useEffect(() => {
    if (productRef.current) {
      setProductWidth(productRef.current.offsetWidth);
    }
  }, []);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    console.log(productWidth);
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className="left">
      <Header />
      <div className="product">
        <h3>Products</h3>
        <div className="left--scroll" ref={elementRef}>
          {products.map((product, index) => {
            return (
              <Products
                productName={product.name}
                imgSrc={product.imgSrc}
                productRef={productRef}
              />
            );
          })}
        </div>
        <button
          className="products--button"
          onClick={() => {
            handleHorizantalScroll(
              elementRef.current,
              25,
              productWidth,
              -productWidth
            );
          }}
          disabled={arrowDisable}
        >
          ←
        </button>
        <button
          className="products--button"
          onClick={() => {
            handleHorizantalScroll(
              elementRef.current,
              25,
              productWidth,
              productWidth
            );
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
