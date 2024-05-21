import Products from "../Products/Products";

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

  return (
    <div className="left">
      <h3>Products</h3>
      <div className="left--scroll">
        {products.map((product, index) => {
          return (
            <Products
              key={index}
              productName={product.name}
              imgSrc={product.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
}
