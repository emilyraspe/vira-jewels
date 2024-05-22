export default function Products({ productName, imgSrc }) {
  return (
    <div className="product--container">
      {" "}
      <img src={imgSrc} alt={productName} className="product--img" />
      <p className="product--name">{productName}</p>
    </div>
  );
}
