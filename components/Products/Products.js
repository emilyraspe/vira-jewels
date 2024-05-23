export default function Products({ productName, imgSrc, productRef }) {
  return (
    <div className="product--container" ref={productRef}>
      {" "}
      <img src={imgSrc} alt={productName} className="product--img" />
      <p className="product--name">– {productName} – </p>
    </div>
  );
}
